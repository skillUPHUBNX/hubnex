import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the type for each testimonial
interface Testimonial {
  label: string;
  text: string;
  name: string;
  position: string;
}

// Define the props for the component
interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
      <div className="flex gap-4 rounded-2xl overflow-hidden text-center space-y-10">
          <Card className="bg-[#F5F5F7] border-none space-y-10">
              <CardHeader>
                  <CardTitle className="font-bold text-xl sm:text-2xl md:text-3xl  leading-snug">
                      Driving results for leaders across the globe
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 px-0">
                  <h4 className="font-bold text-xl sm:text-2xl md:text-3xl  leading-snug w-[68%] mx-auto">
                      {testimonial.label}
                  </h4>
                  <p className="font-normal text-sm sm:text-base md:text-lg  text-gray-500 leading-relaxed w-[60%] mx-auto">
                      {testimonial.text}
                  </p>
              </CardContent>
              <CardFooter className="flex-col">
                  <h4 className="font-medium text-lg sm:text-xl md:text-2xl leading-snug">
                      {testimonial.name}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#52525B] mb-10 leading-snug">
                      {testimonial.position}
                  </p>
              </CardFooter>
          </Card>
      </div>
  );
};

export default TestimonialCard;
