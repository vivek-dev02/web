import { memo } from "react";

import { NodeProps } from "@xyflow/react";
import {
  GroupNode,
  GroupNodeLabel,
} from "@/registry/components/labeled-group-node";

const LabeledGroupNode = memo(({ selected }: NodeProps) => {
  return (
    <GroupNode selected={selected}>
      <GroupNodeLabel>Label</GroupNodeLabel>
    </GroupNode>
  );
});

export default LabeledGroupNode;
