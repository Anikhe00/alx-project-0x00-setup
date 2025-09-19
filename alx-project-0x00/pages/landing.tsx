import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className=" flex flex-col items-start justify-center gap-8">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button title="Small - Rounded Sm" size="small" shape="rounded-sm" />
        <Button title="Small - Rounded Md" size="small" shape="rounded-md" />
        <Button
          title="Small - Rounded Full"
          size="small"
          shape="rounded-full"
        />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button title="Medium - Rounded Sm" size="medium" shape="rounded-sm" />
        <Button title="Medium - Rounded Md" size="medium" shape="rounded-md" />
        <Button
          title="Medium - Rounded Full"
          size="medium"
          shape="rounded-full"
        />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button title="Large - Rounded Sm" size="large" shape="rounded-sm" />
        <Button title="Large - Rounded Md" size="large" shape="rounded-md" />
        <Button
          title="Large - Rounded Full"
          size="large"
          shape="rounded-full"
        />
      </div>
    </div>
  );
};

export default Landing;
