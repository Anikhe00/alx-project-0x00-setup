import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className=" flex flex-col items-start justify-center gap-8">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      {/* Small Buttons */}
      <div className="flex gap-4">
        <Button
          title="Small - Rounded Sm"
          size="small"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Small - Rounded Md"
          size="small"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Small - Rounded Full"
          size="small"
          shape="rounded-lg"
          styles=""
        />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-4">
        <Button
          title="Medium - Rounded Sm"
          size="medium"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Medium - Rounded Md"
          size="medium"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Medium - Rounded Full"
          size="medium"
          shape="rounded-lg"
          styles=""
        />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-4">
        <Button
          title="Large - Rounded Sm"
          size="large"
          shape="rounded-sm"
          styles=""
        />
        <Button
          title="Large - Rounded Md"
          size="large"
          shape="rounded-md"
          styles=""
        />
        <Button
          title="Large - Rounded Full"
          size="large"
          shape="rounded-lg"
          styles=""
        />
      </div>
    </div>
  );
};

export default Landing;
