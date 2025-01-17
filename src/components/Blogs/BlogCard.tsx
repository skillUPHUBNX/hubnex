import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// Define the type for each BlogCard
interface Blog {
  image: string;
  time: string;
  label: string;
  text: string;
}

// Define the props for the component
interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
      <div className="flex gap-4 rounded-2xl overflow-hidden  space-y-10">
          <Card>
              <CardHeader>
                  <img src={blog.image} alt="Hero" className="w-full" />
              </CardHeader>
              <CardContent className="space-y-4 ">
                <p className="text-blue-600 font-semibold">Alec Whitten • 17 Jan 2022</p>
                  <h4 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl leading-snug">
                      {blog.label}
                  </h4>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                      {blog.text}
                  </p>
              </CardContent>
              <CardFooter className="pb-4">
                  {/* Add any footer content here */}
              </CardFooter>
          </Card>
      </div>
  );
};

export default BlogCard;
