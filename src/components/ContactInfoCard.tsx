import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

import Surface from "./Surface";

interface ContactInfoCardProps {
  icon: ReactNode;
  title: string;
  description: ReactNode | string;
}

function ContactInfoCard({ icon, title, description }: ContactInfoCardProps) {
  return (
    <Surface
      py={4}
      px={8}
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      borderRadius="16px"
      w="100%"
      transition="transform .4s"
      _hover={{ transform: "scale(0.97)" }}
    >
      <Box color="primary.500">{icon}</Box>
      <Heading as="h2" fontSize="md" color="text.500">
        {title}
      </Heading>
      <Box textAlign="center" fontSize="sm" mt={2} lineHeight="1.5rem">
        {description}
      </Box>
    </Surface>
  );
}

export default ContactInfoCard;
