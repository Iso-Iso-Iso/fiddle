import React from "react";
import { Drawer } from "@/components/uikit/Drawer/Drawer";
import { Typography } from "@/components/uikit/Typography/Typography";
import { TextEditViewer } from "@/components/TextEditViewer/TextEditViewer";
import { ImageGrid } from "@/components/modals/FiddleDrawer/fiddleDrawer.styles";
import Image from "next/image";

export const FiddleDrawer = ({ fiddle }) => {
  return (
    <Drawer>
      <Typography text={fiddle.name} variant="h4" />
      <TextEditViewer content={fiddle.content} />
      <ImageGrid>
        {fiddle.images.map((image) => (
          <Image
            key={image}
            width={130}
            height={80}
            alt={fiddle.name}
            src={image}
          />
        ))}
      </ImageGrid>
    </Drawer>
  );
};
