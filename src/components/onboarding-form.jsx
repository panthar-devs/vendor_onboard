"use client"

import { useActionState, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { Loader2, MapPin, User, Mail, Store, Star } from "lucide-react"
import { onboardAction } from "@/lib/actions"

const initialState = {
  message: "",
  status: "INITIAL",
}

export function OnboardingForm({ className, ...props }) {
  const [state, formAction, isPending] = useActionState(onboardAction, initialState)
  const [gstRegistered, setGstRegistered] = useState(undefined)
  const [onlinePresence, setOnlinePresence] = useState({
    website: "",
    instagram: "",
    marketplace: "",
  })
  const [rating, setRating] = useState(undefined)

  const handleClearForm = () => {
    // This is a client-side clear. For a full reset, you might need to reload or manage more state.
    const formElement = document.querySelector("form")
    if (formElement) {
      formElement.reset()
    }
    setGstRegistered(undefined)
    setOnlinePresence({ website: "", instagram: "", marketplace: "" })
    setRating(undefined)
    // Reset the action state if needed, though useActionState doesn't expose a direct reset.
    // For a true reset of useActionState, you'd typically re-mount the component or pass a new key.
  }

  return (
    <div className={cn("w-full max-w-2xl space-y-6", className)} {...props}>
      <form action={formAction} className="space-y-6">
        {/* Business Details */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Store className="h-5 w-5 text-gray-500" /> Business Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <Label>Do you have GST. Registration?</Label>
              <RadioGroup
                name="gstRegistration"
                value={gstRegistered}
                onValueChange={setGstRegistered}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="gst-yes" />
                  <Label htmlFor="gst-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="gst-no" />
                  <Label htmlFor="gst-no">No</Label>
                </div>
              </RadioGroup>
              {gstRegistered === "yes" && (
                <div className="grid gap-3 mt-4">
                  <Label htmlFor="gstNumber">
                    GST Number <span className="text-red-500">*</span>
                  </Label>
                  <Input id="gstNumber" name="gstNumber" type="text" required />
                </div>
              )}
              {gstRegistered && (
                <Button variant="link" onClick={() => setGstRegistered(undefined)} className="self-start p-0 h-auto">
                  Clear selection
                </Button>
              )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="businessName">
                Business Name <span className="text-red-500">*</span>
              </Label>
              <Input id="businessName" name="businessName" type="text" required />
            </div>

            <div className="grid gap-3">
              <Label>
                Business Type: <span className="text-red-500">*</span>
              </Label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Individual Seller(Through Instagram, Whats App or Website)",
                  "Retail Store",
                  "Manufacturer",
                  "Wholesaler",
                  "Distributor",
                  "Others",
                ].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={`businessType-${type.replace(/\s/g, "")}`} name="businessType" value={type} />
                    <Label htmlFor={`businessType-${type.replace(/\s/g, "")}`}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Store Location */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gray-500" /> Store Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="addressLine1">
                Address Line 1 <span className="text-red-500">*</span>
              </Label>
              <Input id="addressLine1" name="addressLine1" type="text" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="city">
                  City <span className="text-red-500">*</span>
                </Label>
                <Input id="city" name="city" type="text" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="state">
                  State <span className="text-red-500">*</span>
                </Label>
                <Input id="state" name="state" type="text" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="pincode">
                  Pincode <span className="text-red-500">*</span>
                </Label>
                <Input id="pincode" name="pincode" type="text" required />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Person */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-gray-500" /> Contact Person
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input id="fullName" name="fullName" type="text" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="designation">Designation/ Role</Label>
              <Input id="designation" name="designation" type="text" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phoneNumber">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input id="phoneNumber" name="phoneNumber" type="tel" required />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="emailAddress">Email Address</Label>
              <Input id="emailAddress" name="emailAddress" type="email" />
            </div>
          </CardContent>
        </Card>

        {/* Product Categories */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-gray-500" /> Product Categories You Offer{" "}
              <span className="text-red-500">*</span>
            </CardTitle>
            <CardDescription>Select all that apply</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Spectacles With Prescribed Lenses",
              "Sunglasses",
              "Contact Lenses",
              "Lens Solutions",
              "Accessories (Cases, Selvets, Chains, etc.)",
            ].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`productCategory-${category.replace(/\s/g, "")}`}
                  name="productCategory"
                  value={category}
                />
                <Label htmlFor={`productCategory-${category.replace(/\s/g, "")}`}>{category}</Label>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Online Presence */}
        <Card>
          <CardHeader>
            <CardTitle>
              Online Presence <span className="text-red-500">*</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 gap-y-2">
              <Label>Website:</Label>
              <RadioGroup
                name="onlinePresenceWebsite"
                value={onlinePresence.website}
                onValueChange={(value) => setOnlinePresence((prev) => ({ ...prev, website: value }))}
                className="col-span-2 flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="website-yes" />
                  <Label htmlFor="website-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="website-no" />
                  <Label htmlFor="website-no">No</Label>
                </div>
              </RadioGroup>

              <Label>Instagram / Facebook Page:</Label>
              <RadioGroup
                name="onlinePresenceInstagram"
                value={onlinePresence.instagram}
                onValueChange={(value) => setOnlinePresence((prev) => ({ ...prev, instagram: value }))}
                className="col-span-2 flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="instagram-yes" />
                  <Label htmlFor="instagram-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="instagram-no" />
                  <Label htmlFor="instagram-no">No</Label>
                </div>
              </RadioGroup>

              <Label>Marketplace Store Links (Amazon, Flipkart, etc.):</Label>
              <RadioGroup
                name="onlinePresenceMarketplace"
                value={onlinePresence.marketplace}
                onValueChange={(value) => setOnlinePresence((prev) => ({ ...prev, marketplace: value }))}
                className="col-span-2 flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="marketplace-yes" />
                  <Label htmlFor="marketplace-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="marketplace-no" />
                  <Label htmlFor="marketplace-no">No</Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>

        {/* Why Join FrameFinder? */}
        <Card>
          <CardHeader>
            <CardTitle>Why Join FrameFinder?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              <li>Zero onboarding fee during the pre-launch phase</li>
              <li>Early access to promotions and marketing support</li>
              <li>Dedicated dashboard to manage products and orders</li>
              <li>Customer base focused purely on eyewear</li>
              <li>Sell your product to Pan-India</li>
            </ul>
          </CardContent>
        </Card>

        {/* How Much Do you like this New Startup Ecommerce Platform? */}
        <Card>
          <CardHeader>
            <CardTitle>
              How Much Do you like this New Startup Ecommerce Platform? <span className="text-red-500">*</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              name="platformRating"
              value={rating}
              onValueChange={setRating}
              className="flex justify-around items-center"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="flex flex-col items-center gap-1">
                  <Label htmlFor={`rating-${num}`} className="text-lg font-medium">
                    {num}
                  </Label>
                  <RadioGroupItem value={String(num)} id={`rating-${num}`} className="sr-only" />
                  <Star
                    className={cn(
                      "h-8 w-8 cursor-pointer transition-colors",
                      rating && Number.parseInt(rating) >= num ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                    )}
                    onClick={() => setRating(String(num))}
                  />
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <Button type="submit" className="w-full sm:w-auto" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Submit"
            )}
          </Button>
          <Button type="button" variant="ghost" onClick={handleClearForm} className="w-full sm:w-auto">
            Clear form
          </Button>
        </div>

        {state?.status === "ERROR" && (
          <p className="text-red-500 text-sm mt-2" aria-live="polite">
            {state.message}
          </p>
        )}
        {state?.status === "SUCCESS" && (
          <p className="text-green-500 text-sm mt-2" aria-live="polite">
            {state.message}
          </p>
        )}

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8 space-y-1">
          <p>Never submit passwords through Google Forms.</p>
          <p>
            This content is neither created nor endorsed by Google. -{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact form owner
            </a>{" "}
            -{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            -{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
          <p>
            Does this form look suspicious?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Report
            </a>
          </p>
          <p className="text-lg font-semibold text-gray-700 mt-2">Google Forms</p>
        </div>
      </form>
    </div>
  )
}
