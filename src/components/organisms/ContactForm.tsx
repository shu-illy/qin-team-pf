import { Center, Stack, Text, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { SectionTitle } from "components/atoms/SectionTitle";
import { Button } from "lib/mantine";
import { useIsDark } from "lib/mantine/useIsDark";
import React, { FC, useState } from "react";
import { microCmsClient } from "lib/microcms/client";
import { NotificationsProvider, showNotification } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons";

type Contact = {
  email: string;
  name: string;
  message: string;
};

const ContactForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "メールアドレスの形式が正しくありません"),
      name: (value) => (value.length < 1 ? "名前を入力してください" : null),
      message: (value) => (value.length < 1 ? "メッセージを入力してください" : null),
    },
  });
  const isDark = useIsDark();

  const submitValues = async (values: Contact) => {
    setIsLoading(true);
    await microCmsClient.create<Contact>({
      endpoint: "contact",
      content: {
        email: values.email,
        name: values.name,
        message: values.message,
      },
    });
    setIsLoading(false);

    showNotification({
      autoClose: 3000,
      title: "Succeeded to send contact message!",
      message: "",
      color: "teal",
      icon: <IconCheck size={18} />,
      loading: false,
    });

    form.reset();
  };

  return (
    <NotificationsProvider>
      <form onSubmit={form.onSubmit((values) => submitValues(values))}>
        <Stack spacing={0}>
          <SectionTitle>Contact</SectionTitle>
          <Stack spacing={24}>
            <Stack spacing={4}>
              <Text size={14} weight={600}>
                Email
              </Text>
              <TextInput placeholder="your@email.com" {...form.getInputProps("email")} />
            </Stack>

            <Stack spacing={4}>
              <Text size={14} weight={600}>
                Name
              </Text>
              <TextInput placeholder="Taro Yamada" {...form.getInputProps("name")} />
            </Stack>

            <Stack spacing={4}>
              <Text size={14} weight={600}>
                Your Message
              </Text>
              <Textarea
                placeholder="I want to order your goods"
                {...form.getInputProps("message")}
              />
            </Stack>
            <Center>
              <Button
                type="submit"
                color="dark"
                radius="xl"
                size="md"
                variant={isDark ? "white" : "filled"}
                loading={isLoading}
              >
                Send message
              </Button>
            </Center>
          </Stack>
        </Stack>
      </form>
    </NotificationsProvider>
  );
};

export default ContactForm;
