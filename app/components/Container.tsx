"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:20-px md:10-px sm:2-px px-4">
      {children}
    </div>
  );
};

export default Container;
