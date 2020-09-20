import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function CoffeeInfo({ navigation }) {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(navigation.openDrawer());
  const {
    authorRef,
    identificationRef,
    nameRef,
    descriptionRef,
  } = React.useRef();

  return (
    <View>
      <View>
        <Text>Author</Text>
        <Controller
          name="author"
          defaultValue=""
          control={control}
          onFocus={() => {
            authorRef.current.focus();
          }}
          render={(props) => (
            <TextInput
              placeholder="Leave blank for anonymous."
              {...props}
              onChangeText={(value) => {
                props.onChange(value);
              }}
              ref={authorRef}
            />
          )}
        />
      </View>

      <View>
        <Button
          title="submit"
          onPress={() => {
            console.log("Info");
          }}
        />
      </View>
    </View>
  );
}
