/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { ArrowRight, Loader, Locate, MessageCircle, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";
import ContactCounter from "./ContactCounter";
import { countries, locationCountry } from "@/constant";
import axios from "axios";
import { toast } from "react-toastify";

interface State {
    name: string;
    address?: string;
    email?: string;
    phone?: string;
}

interface Country {
    label: string;
    image: string;
    states: State[];
}

export interface FormStructure {
    name: string;
    email: string;
    phonenumber: string;
    service: string;
    message?: string;
}

export default function ContactForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null); // Correctly typed
    const [selectedState, setSelectedState] = useState<State | null>(null); // Correctly typed
    const [errorMessage, setErrorMessage] = useState<{ [key: string]: string } | null>(null); // Store errors by field name
    const [isdCode, setIsdCode] = useState(countries[0].code);
    const form = useForm<FormStructure>({
        defaultValues: {
            name: "",
            email: "",
            phonenumber: "",
            service: "",
            message: "",
        },
    });

    async function onSubmit(values: FormStructure) {
        const fullPhoneNumber = `${isdCode}${values.phonenumber}`;
        const payload = { ...values, phonenumber: fullPhoneNumber };

        setIsLoading(true);
        setErrorMessage(null); // Reset any previous errors
        try {
            const response = await axios.post(import.meta.env.VITE_BACKEND, payload);
               if (response.status === 201) {
                form.reset();  // Reset the form
                toast.success("Your message has been sent successfully!");
            }
        } catch (error: any) {
            console.error("Error submitting form:", error);
            // Format the error messages based on the response and update state
            if (error.response?.data?.errors) {
                const errors = error.response.data.errors.reduce((acc: { [key: string]: string }, curr: any) => {
                    acc[curr.path[0]] = curr.message;
                    return acc;
                }, {});
                setErrorMessage(errors);
            } else {
                toast.error("An error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    // Add render logic for error messages above fields
    const renderErrorMessage = (field: string) => {
        if (errorMessage && errorMessage[field]) {
            return <span className="text-red-500">{errorMessage[field]}</span>;
        }
        return null;
    };

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country);
        setSelectedState(null); // Reset the state selection when switching countries
    };

    const handleStateClick = (state: State) => {
        setSelectedState(state);
    };

    useEffect(() => {
        // Set the default country to India when the component mounts
        const defaultCountry = locationCountry.find((loc) => loc.label === "India");
        if (defaultCountry) {
            setSelectedCountry(defaultCountry);
            setSelectedState(defaultCountry.states[0]); // Automatically select the first state
        }
    }, []);

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-[25%,70%] gap-8 mb-24">
                {/* Image Section */}
                <div
                    className="bg-no-repeat bg-cover flex flex-col justify-end items-end relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
                    style={{ backgroundImage: 'url("/contact.png")' }}
                >
                    <div className="absolute bottom-8 left-0 space-y-2 w-full px-4 lg:px-8">
                        <div className="space-y-2">
                            <ContactCounter />
                            <p className="text-sm lg:text-base text-black text-center">
                                Companies are using & it’s growing everyday
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Button variant="blue">
                                <div className="flex items-center gap-2 text-white">
                                    Check Now
                                    <ArrowRight />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="container mx-auto px-4 py-6 lg:py-12">
                    <div className="form bg-white shadow-lg p-4 sm:p-6 lg:p-8 rounded-lg">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                            Let’s level up your brand, together
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600 my-4">
                            You can reach us anytime via xyz@hubnex.in
                        </p>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                {/* Full Name Field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Full Name" {...field} />
                                            </FormControl>
                                            {renderErrorMessage("name")}
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Email" {...field} />
                                            </FormControl>
                                            {renderErrorMessage("email")}
                                        </FormItem>
                                    )}
                                />

                                {/* Phone Number Field */}
                                <FormField
                                    control={form.control}
                                    name="phonenumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number *</FormLabel>
                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                {/* Country Code Dropdown */}
                                                <div className="flex items-center space-x-2 px-2">
                                                    <select
                                                        value={isdCode}
                                                        onChange={(e) => setIsdCode(e.target.value)}
                                                        className="border-none bg-transparent  focus:ring-0 text-sm font-medium"
                                                    >
                                                        {countries.map((country, index) => (
                                                            <option key={index} value={country.code}>
                                                                {country.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <span className="text-gray-500 font-medium">{isdCode}</span>
                                                </div>

                                                {/* Phone Number Input */}
                                                <FormControl>
                                                    <Input
                                                        className="flex-grow outline-none ring-0 focus-visible:ring-0 shadow-none border-none px-2"
                                                        placeholder="Phone Number"
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                            {renderErrorMessage("phonenumber")}
                                        </FormItem>
                                    )}
                                />

                                {/* Service Field */}
                                <FormField
                                    control={form.control}
                                    name="service"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Service *</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Service" {...field} />
                                            </FormControl>
                                            {renderErrorMessage("service")}
                                        </FormItem>
                                    )}
                                />

                                {/* Message Field */}
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Message"
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader className="animate-spin" />
                                    ) : (
                                        "Get Started"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </div>

           
            {/* Country and State Section */}
            <div className="container mx-auto px-4 py-6 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Country and State Selector */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {locationCountry.map((loc, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center gap-y-4 shadow-md p-4 hover:bg-white bg-gray-100 rounded-md text-center cursor-pointer"
                                    onClick={() => handleCountryClick(loc)}
                                >
                                    <h2 className="bg-gradient-to-r from-indigo-500 to-purple-500 p-1 rounded-xl text-white">
                                        {loc.label2}
                                    </h2>
                                    <img
                                        src={loc.image}
                                        alt={loc.label}
                                        className="object-cover rounded-md"
                                    />
                                    <h2 className="text-black">{loc.label}</h2>
                                </div>
                            ))}
                        </div>

                        {selectedCountry && (
                            <div className="mt-4">
                                <div className="flex flex-wrap gap-4">
                                    {selectedCountry.states.map((state, i) => (
                                        <button
                                            key={i}
                                            className="px-4 py-2 text-blue-600 hover:underline font-bold"
                                            onClick={() => handleStateClick(state)}
                                        >
                                            {state.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedState && (
                            <div className="mt-6 space-y-7 p-4 rounded-lg">
                                <p className="text-xl">
                                    <Locate className="inline mr-2" />
                                    {selectedState.address}
                                </p>
                                <p className="text-xl">
                                    <MessageCircle className="inline mr-2" />
                                    {selectedState.email}
                                </p>
                                <p className="text-xl">
                                    <PhoneCall className="inline mr-2" />
                                    {selectedState.phone}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Contact Image Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="/conbanner.png"
                            alt="Contact"
                            className="object-cover rounded-lg shadow-lg "
                        />
                    </div>
                </div>
            </div>
        </>
    );
}