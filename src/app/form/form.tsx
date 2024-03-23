"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "../utils/cn";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  lastName: string;
  regno: string;
  linkedin: string;
  twitter: string;
  portfolio: string;
  hashtags: string[];
  image: string | null;
}

export function Form() {
  const { data: session } = useSession();
  const router = useRouter();

  const [imageError, setImageError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    regno: "",
    linkedin: "",
    twitter: "",
    portfolio: "",
    hashtags: ["", "", ""],
    image: null,
  });

  const [response, setResponse] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSizeInBytes = 1024 * 1024;
      if (file.size > maxSizeInBytes) {
        setImageError("Image size exceeds the maximum allowed size (1 MB).");
        return;
      }

      const maxImageWidth = 350;
      const maxImageHeight = 350;

      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image();
        image.src = reader.result as string;
        image.onload = () => {
          if (image.width > maxImageWidth || image.height > maxImageHeight) {
            setImageError(
              "Image dimensions exceed the maximum allowed dimensions (350 x 350 px)."
            );
          } else {
            setImageError(null);
            const binaryString = reader.result?.toString().split(",")[1];
            setFormData((prevFormData) => ({
              ...prevFormData,
              image: binaryString || "",
            }));
          }
        };
      };
      reader.readAsDataURL(file);
    } else {
      setImageError("Please select an image.");
    }
  };

  const handleHashChange = (index: number, value: string) => {
    setFormData((prevFormData) => {
      const updatedFormData: FormData = { ...prevFormData }; // Explicitly set the type
      updatedFormData.hashtags = prevFormData.hashtags.map((tag, i) =>
        i === index ? value : tag
      );
      return updatedFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !isValidUrl(formData.twitter) ||
      !isValidUrl(formData.linkedin) ||
      !isValidUrl(formData.portfolio)
    ) {
      alert("Please enter valid URLs starting with https://");
      return;
    }
  
    const email = session?.user?.email;
  
    try {
      const response = await fetch(`/api/form/${session?.user?.email}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      setResponse(await response.text());
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      router.push("/home");
    }
  };
  
  const isValidUrl = (url: string): boolean => {
    // If the URL is empty, consider it valid
    if (url.trim() === "") {
      return true;
    }
    
    // Regular expression to validate URL starting with https://
    const urlPattern = /^https:\/\//i;
    return urlPattern.test(url);
  };
  

  return session ? (
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
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              placeholder="First"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              placeholder="Last"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="linkedin">Registration Number</Label>
          <Input
            id="regno"
            placeholder="Registration Number"
            type="text"
            required
            value={formData.regno}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="linkedin">Linkedin</Label>
          <Input
            id="linkedin"
            placeholder="Linkedin Link"
            type="text"
            required
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="twitter">Twitter</Label>
          <Input
            id="twitter"
            placeholder="Twitter Link"
            type="text"
            required
            value={formData.twitter}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-5">
          <Label htmlFor="portfolio">Portfolio</Label>
          <Input
            id="portfolio"
            placeholder="Portfolio"
            type="text"
            value={formData.portfolio}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-5">
          <Label htmlFor="portfolio">Three languages you code in</Label>
          <Input
            id="hash1"
            placeholder="Language 1 (e.g. Python)"
            type="text"
            value={formData.hashtags[0]}
            onChange={(e) => handleHashChange(0, e.target.value)}
          />
          <Input
            id="hash2"
            placeholder="Language 2 (e.g. NextJs)"
            type="text"
            value={formData.hashtags[1]}
            onChange={(e) => handleHashChange(1, e.target.value)}
          />
          <Input
            id="hash3"
            placeholder="Language 3 (e.g. AngularJs)"
            type="text"
            value={formData.hashtags[2]}
            onChange={(e) => handleHashChange(2, e.target.value)}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="image">Image</Label>
          <Input
            id="image"
            placeholder="keep image (350 x 350)px"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          {imageError && <p className="text-red-500">{imageError}</p>}
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  ) : (
    redirect("/")
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
