// InputField.js
import React from "react";
import { FormControl, FormLabel, Input, Select, Text, Textarea, RadioGroup, Radio } from "@chakra-ui/react";

const InputField = ({ label, name, type = "text", value, onChange, options = [], defaultValue = "", error }: any) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      {type === "textarea" ? (
        <Textarea name={name} value={value} onChange={onChange} />
      ) : type === "radio" ? (
        <RadioGroup name={name} value={value} onChange={onChange}>
          {options.map((option: any) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </RadioGroup>
      ) : (
        <Input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          as={type === "select" ? Select : undefined}
          defaultValue={defaultValue}
        />

      )}
   
    </FormControl>
  );
};

export default InputField;
