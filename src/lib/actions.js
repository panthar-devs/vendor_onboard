"use server"

import { revalidatePath } from "next/cache"

export async function onboardAction(prevState, formData) {
  // Simulate a network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const data = Object.fromEntries(formData.entries())
  console.log("Onboarding form data received:", data)

  // Simulate a successful submission
  revalidatePath("/onboarding") // Revalidate the path if needed
  return { message: "Onboarding form submitted successfully!", status: "SUCCESS" }

  // To simulate an error, uncomment the following:
  // return { message: "Failed to submit onboarding form. Please try again.", status: "ERROR" };
}
