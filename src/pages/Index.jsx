import { Box, Flex, Heading, Text, Button, Image, VStack, HStack, Link, Icon } from "@chakra-ui/react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUtensils, FaRunning, FaSpa } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Flex bgImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb25nZXZpdHklMjByZXRyZWF0fGVufDB8fHx8MTcxNDMzNjMwNXww&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" h="100vh" align="center" justify="center" color="white" direction="column" px={8}>
        <Heading as="h1" size="4xl" textAlign="center">
          Longevity Retreats
        </Heading>
        <Text fontSize="xl" mt={4} textAlign="center">
          Discover your path to health and wellness
        </Text>
        <Button mt={10} size="lg" colorScheme="teal">
          Explore Retreats
        </Button>
      </Flex>

      {/* About Section */}
      <VStack spacing={8} py={16} px={8} align="center">
        <Heading as="h2" size="2xl">
          About Us
        </Heading>
        <Text fontSize="lg" maxW="container.md">
          At Longevity Retreats, we offer a unique blend of relaxation, wellness, and transformation. Our retreats are designed to help you rejuvenate your body, refresh your mind, and renew your spirit.
        </Text>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx5b2dhJTIwcmV0cmVhdHxlbnwwfHx8fDE3MTQzMzYzMDV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Yoga Retreat" />
      </VStack>

      {/* Services Section */}
      <Flex wrap="wrap" justify="center" py={16} px={8}>
        <ServiceBox title="Nutrition Plans" description="Tailored meals to nourish and energize." icon="FaUtensils" />
        <ServiceBox title="Fitness Programs" description="Activities designed for all fitness levels." icon="FaRunning" />
        <ServiceBox title="Wellness Workshops" description="Learn practices to enhance your well-being." icon="FaSpa" />
      </Flex>

      {/* Contact Section */}
      <Flex direction="column" align="center" bg="gray.100" p={10}>
        <Heading as="h3" size="lg" mb={4}>
          Contact Us
        </Heading>
        <HStack spacing={4}>
          <Icon as={FaPhone} w={6} h={6} />
          <Text>+123 456 7890</Text>
        </HStack>
        <HStack spacing={4} mt={2}>
          <Icon as={FaEnvelope} w={6} h={6} />
          <Text>info@longevityretreats.com</Text>
        </HStack>
        <HStack spacing={4} mt={2}>
          <Icon as={FaMapMarkerAlt} w={6} h={6} />
          <Text>123 Retreat Blvd, Wellness City</Text>
        </HStack>
      </Flex>

      {/* Footer */}
      <Flex bg="teal.500" color="white" p={4} justify="center" align="center">
        <Link href="https://www.instagram.com" isExternal mx={2}>
          <Icon as={FaInstagram} w={6} h={6} />
        </Link>
        <Link href="https://www.facebook.com" isExternal mx={2}>
          <Icon as={FaFacebookF} w={6} h={6} />
        </Link>
        <Link href="https://www.twitter.com" isExternal mx={2}>
          <Icon as={FaTwitter} w={6} h={6} />
        </Link>
        <Link href="https://www.linkedin.com" isExternal mx={2}>
          <Icon as={FaLinkedinIn} w={6} h={6} />
        </Link>
      </Flex>
    </Box>
  );
};

const ServiceBox = ({ title, description, icon }) => {
  const IconComponent = {
    FaUtensils: FaUtensils,
    FaRunning: FaRunning,
    FaSpa: FaSpa,
  }[icon];
  return (
    <VStack maxW="sm" p={8} bg="white" boxShadow="md" rounded="md" m={4} align="center" spacing={4}>
      <Icon as={IconComponent} w={10} h={10} color="teal.500" />
      <Heading as="h4" size="md">
        {title}
      </Heading>
      <Text textAlign="center">{description}</Text>
    </VStack>
  );
};

export default Index;
