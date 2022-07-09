import { Container, filter, Tab, TabList, Tabs } from "@chakra-ui/react";
import { object } from "prop-types";
import { FILTER } from "../constants";

const Filter = () => {
  return (
    <Container centerContent>
      <Tabs>
        <TabList>
          {Object.keys(FILTER).map((filterkey) => {
            const currentFilter = FILTER[filterkey];
            return <Tab key={`filter-${currentFilter}`}>{currentFilter}</Tab>;
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};

export default Filter;
