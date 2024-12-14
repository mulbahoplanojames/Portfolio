"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/schema/zodSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type fromType = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<fromType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubit: SubmitHandler<fromType> = (data) => {
    console.log(data);
  };

  return (
    <>
      <section
        className="grid grid-cols-1 gap-8 px-3 md:px-20 md:py-24 py-14 bg-secondary1 md:grid-cols-2 place-items-center text-text"
        id="/contact"
      >
        <div className="">
          <h2 className="pb-4 text-3xl font-bold md:text-4xl">
            Ready to evalate your web presence?
          </h2>
          <p className="pb-5 text-lg">
            As a passionate front-end React developer, I&apos;m here to
            transform your ideas into stunning, responsive websites. Let&apos;s
            collaborate and create something extraordinary together.
          </p>
        </div>
        <div className="bg-text md:w-[80%] w-full rounded-md px-4 py-5 text-primary">
          <h2 className="pb-5 text-2xl font-bold capitalize ">
            Get started today
          </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="md:h-10 h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="md:h-10 h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell ma a little bit about yourself and your project"
                        className="resize-none h-28"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* form name  */}
              <input type="hidden" name="from_name" value="Oplano Portfolio" />
              <input
                type="hidden"
                name="subject"
                value="New Submission from Oplano James Mulbah Portfolio"
              />
              <span className="inline-block pb-2"></span>

              <button
                type="submit"
                className="w-full py-3 text-lg rounded-md bg-primary text-text hover:opacity-85"
              >
                Let&apos;s Connect
              </button>
            </form>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contact;
