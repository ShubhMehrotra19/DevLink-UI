"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "../utils/cn";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Console, log } from "console";

export function Form() {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    linkedin: "",
    twitter: "",
    portfolio: "",
  });
  const [imageError, setImageError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    console.log(formData); // Log formData after updating
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const imageInput = e.currentTarget.querySelector(
      "#image"
    ) as HTMLInputElement;

    if (imageInput.files && imageInput.files.length > 0) {
      const selectedFile = imageInput.files[0];

      // Check file size (in bytes)
      const maxSizeInBytes = 1024 * 1024; // 1 MB
      if (selectedFile.size > maxSizeInBytes) {
        setImageError("Image size exceeds the maximum allowed size (1 MB).");
        return;
      }

      // Check image dimensions
      const maxImageWidth = 350;
      const maxImageHeight = 350;

      const image = new Image();
      image.src = URL.createObjectURL(selectedFile);

      image.onload = () => {
        if (image.width > maxImageWidth || image.height > maxImageHeight) {
          setImageError(
            "Image dimensions exceed the maximum allowed dimensions (350 x 350 px)."
          );
        } else {
          // Clear previous image error, if any
          setImageError(null);

          // Proceed with form submission
          try {
            const formDataToSend = new FormData(e.currentTarget);
            (async () => {
              const submitForm = async () => {
                const response = await fetch(
                  `/api/form/${session?.user?.email}`,
                  {
                    method: "PUT",
                    body: formDataToSend,
                  }
                );

                if (response.ok) {
                  console.log("Form submitted successfully");
                } else {
                  console.error("Form submission failed");
                }
              };

              await submitForm();
            })();
          } catch (error) {
            console.error("Error submitting form:", error);
          }
        }
      };
    } else {
      // No file selected
      setImageError("Please select an image.");
    }
  };

  return (
    <div className="absolute z-20 max-w-md w-full flex flex-col justify-center items-center mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black bg-[rgba(0, 0, 0, 0.3)] backdrop-blur-sm">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to DevLink!
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Register your information to get started.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="First"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Last"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="link">Linkedin</Label>
          <Input
            id="linkedin"
            placeholder="Linkedin Link"
            type="text"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="link">Twitter</Label>
          <Input
            id="twitter"
            placeholder="Twitter Link"
            type="text"
            value={formData.twitter}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-5">
          <Label htmlFor="link">Portfolio</Label>
          <Input
            id="portfolio"
            placeholder="Portfolio"
            type="text"
            value={formData.portfolio}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            placeholder="keep image (300 x 300)px"
            type="file"
            accept="image/*"
          />
          {imageError && <p className="text-red-500">{imageError}</p>}
        </LabelInputContainer>
        <Link href="/home">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Submit &rarr;
            <BottomGradient />
          </button>
        </Link>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
