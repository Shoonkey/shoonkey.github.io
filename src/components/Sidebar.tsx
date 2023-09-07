import {
  Flex,
  IconButton,
  Heading,
  useColorMode,
  Tooltip,
  Text,
  Select,
  Divider,
} from "@chakra-ui/react";
import { X, MoonStars, SunHorizon } from "@phosphor-icons/react";
import { ForwardedRef, forwardRef } from "react";
import { useTranslation } from "react-i18next";

import projects from "@/shared/projects";
import useThemeColor from "@/hooks/useThemeColor";
import ProjectCard from "./ProjectCard";
import Surface from "./Surface";

interface SidebarProps {
  open: boolean;
  onClickClose: () => void;
}

function Sidebar(
  { open, onClickClose }: SidebarProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { t, i18n } = useTranslation();

  const { colorMode, toggleColorMode } = useColorMode();
  const highlightColor = useThemeColor("primary.500");
  const textColor = useThemeColor("text.800");
  const borderColor = useThemeColor("border.500");

  return (
    <Surface
      ref={ref}
      display="flex"
      flexDir="column"
      position="relative"
      gap={4}
      flexShrink={0}
      p={4}
      w="min(90dvw, 400px)"
      h="100dvh"
      overflowY="auto"
      borderLeftStyle="solid"
      borderLeftWidth="1px"
      borderLeftColor={borderColor}
    >
      <Flex justifyContent="space-between">
        <Tooltip label={t("sidebar.closeButtonLabel")} placement="left">
          <IconButton
            variant="unstyled"
            color={highlightColor}
            icon={<X size={36} />}
            opacity={open ? 1 : 0}
            transform="opacity .4s"
            aria-label={t("sidebar.closeButtonLabel")}
            onClick={onClickClose}
          />
        </Tooltip>
        <Flex flexDir="column" alignItems="end">
          <Flex alignItems="center" gap={2} aria-hidden="true">
            <Text>{t("sidebar.theme")}</Text>
            <Tooltip
              label={t("sidebar.changeThemeButtonLabel", {
                theme: t(`themeName.${colorMode}`),
              })}
              placement="left"
            >
              <IconButton
                aria-label={t("sidebar.changeThemeButtonLabel", {
                  theme: t(`themeName.${colorMode}`),
                })}
                variant="unstyled"
                color={highlightColor}
                icon={
                  colorMode === "dark" ? (
                    <SunHorizon size={36} weight="fill" />
                  ) : (
                    <MoonStars size={36} weight="fill" />
                  )
                }
                onClick={toggleColorMode}
              />
            </Tooltip>
          </Flex>
          <Flex gap={2} alignItems="center">
            {t("sidebar.language")}
            <Select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              borderColor={colorMode === "light" ? "#2b2b2b" : "#e2e2e2"}
              _hover={{ borderColor: highlightColor }}
            >
              <option value="en-US">en-US</option>
              <option value="pt-BR">pt-BR</option>
              <option value="es-ES">es-ES</option>
            </Select>
          </Flex>
        </Flex>
      </Flex>
      <Divider borderColor={borderColor} />
      <Flex flexDir="column" alignItems="end" textAlign="right" gap={2}>
        <Heading
          as="h2"
          size="lg"
          color={highlightColor}
          textTransform="uppercase"
        >
          {t("quickSwitch.title")}
        </Heading>
        <Heading as="h3" size="sm" maxW="90%" color={textColor}>
          {t("quickSwitch.description")}
        </Heading>
        <Flex>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              mode="quick-switch"
            />
          ))}
        </Flex>
      </Flex>
    </Surface>
  );
}

export default forwardRef<HTMLDivElement, SidebarProps>(Sidebar);
