import { Drawer, Button } from "antd";
import { useState } from "react";

function FilterDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size="large" className="py-2!" onClick={() => setOpen(true)}>
        Open Filters
      </Button>

      <Drawer
        title="More Filters"
        placement="left"
        onClose={() => setOpen(false)}
        open={open}
        width={320}
      >
        {/* Filter content */}
        <p>Price Range</p>
        <p>Facilities</p>
        <p>Status</p>
      </Drawer>
    </>
  );
}

export default FilterDrawer;
