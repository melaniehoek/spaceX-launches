import { FC } from "react";
import Icon from "@chakra-ui/icon";
import { useColorModeValue } from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { MdSearch } from "react-icons/md";

interface SearchFieldProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchField: FC<SearchFieldProps> = ({ value, setValue }) => {
  const iconColor = useColorModeValue("gray.400", "whiteAlpha.400");

  return (
    <InputGroup maxW="sm">
      <InputLeftElement pointerEvents="none" color={iconColor}>
        <Icon as={MdSearch} />
      </InputLeftElement>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="filled"
        placeholder="Search launches"
      />
    </InputGroup>
  );
};
