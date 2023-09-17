import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { HandPalm, Handshake } from "@phosphor-icons/react";

import { Project } from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import Surface from "./Surface";
import TechLogo from "./TechLogo";
import CustomTooltip from "./CustomTooltip";

interface ProjectCardProps {
  project: Project;
  mode: "quick-switch" | "project-list";
}

function ProjectCard({ project, mode }: ProjectCardProps) {
  const router = useRouter();
  const { t } = useTranslation();

  const isActive =
    (project.isMeta && !router.asPath.startsWith("/project")) ||
    router.asPath.startsWith(project.href);

  const standardBgColor = useThemeColor("bg.800");
  const quickSwitchBgColor = useThemeColor("bg.500");
  const highlightColor = useThemeColor("primary.500");
  const standardBorderColor = useThemeColor("text.800");

  return (
    <Flex flexDir="column" alignItems="end" h="100%" order={isActive ? -1 : 0}>
      {mode === "quick-switch" && isActive && (
        <Heading
          px={2}
          pt={2}
          color={standardBgColor}
          as="h2"
          size="md"
          bg={highlightColor}
          textTransform="uppercase"
        >
          {t("quickSwitch.youreHere")}
        </Heading>
      )}
      <Surface
        display="flex"
        flexDir="column"
        w="100%"
        h="100%"
        bg={mode === "quick-switch" ? quickSwitchBgColor : standardBgColor}
        borderRadius="16px"
        borderTopRightRadius={
          mode === "quick-switch" && isActive ? "0px" : "16px"
        }
        borderWidth="2px"
        borderStyle="solid"
        borderColor={
          mode === "quick-switch" && isActive
            ? highlightColor
            : standardBorderColor
        }
        _hover={{ cursor: "pointer", borderColor: highlightColor }}
        onClick={() => {
          if (!isActive) router.push(project.href);
        }}
      >
        <Box p={8} pb={0} flexGrow={1}>
          <Link href={project.href}>
            <Image src={project.imgSrc} alt={project.imgAlt} />
          </Link>
        </Box>
        <Flex flexDir="column" p={4} gap={2}>
          <Heading textAlign="center" mt={2} as="h2" size="md">
            {project.name}
          </Heading>
          {mode === "project-list" && (
            <Flex justifyContent="space-between" alignItems="center">
              <Flex gap={4}>
                {project.tags.map((tag) => (
                  <TechLogo key={tag} tagName={tag} />
                ))}
              </Flex>
              <Flex gap={2}>
                <CustomTooltip label={t("projectCard.githubRepo")} placement="top">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("projectCard.githubRepo")}
                  >
                    <Image
                      w="32px"
                      src="/github-mark.svg"
                      alt="Github logo, Invertocat: a little cat in the middle of a circle, tail pointing left"
                      _hover={{ filter: "grayscale(.4)" }}
                    />
                  </Link>
                </CustomTooltip>
                <CustomTooltip
                  label={
                    project.isSolo
                      ? t("projectCard.soloProject")
                      : t("projectCard.collaboration")
                  }
                  placement="top"
                >
                  {project.isSolo ? (
                    <HandPalm
                      size={32}
                      aria-label={t("projectCard.soloProject")}
                    />
                  ) : (
                    <Handshake
                      size={32}
                      aria-label={t("projectCard.collaboration")}
                    />
                  )}
                </CustomTooltip>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Surface>
    </Flex>
  );
}

export default ProjectCard;
