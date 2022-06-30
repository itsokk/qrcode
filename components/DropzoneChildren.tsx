import { Group, Text } from "@mantine/core";
import { DropzoneStatus } from "@mantine/dropzone";

const dropzoneChildren = (status: DropzoneStatus) => (
  <Group
    position="center"
    spacing="xl"
    style={{ height: "2rem", width: "4rem", pointerEvents: "none" }}
  >
    <div>
        <Text size="md" inline>
          Drag/select
        </Text>
    </div>
  </Group>
);

export default dropzoneChildren;
