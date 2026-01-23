import { Box, Card, Flex, Text } from '@sanity/ui';
import Link from 'next/link';
import { GoArrowLeft } from 'react-icons/go';
import { NavbarProps } from 'sanity';

export function StudioNavbar(props: NavbarProps) {
  return (
    <Flex direction="column">
      <Card tone="default" padding={3} borderBottom>
        <Flex align="center" justify="space-between">
          <Box>
            <Link
              href="/"
              className="flex items-center gap-2 text-[#363636] hover:text-black transition-colors px-4">
              <GoArrowLeft className="text-xl" />
              <Text weight="bold" size={2}>
                Back to Website
              </Text>
            </Link>
          </Box>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Flex>
  );
}
