import heroPlaceholder from "@assets/hero-placeholder.svg";
import { Container } from "@components/Container";
import { Typography } from "@components/Typography";

export const Hero = () => {
  return (
    <Container>
      <div className="grid items-center gap-12 py-20 md:grid-cols-2 md:py-32">
        <Typography as="h1" size="display" className="block max-w-md">
          Organize sua coleção de magic hoje de maneira fácil e inteligente!
        </Typography>
        <img
          src={heroPlaceholder}
          alt=""
          className="w-full max-w-md justify-self-end rounded-xl"
        />
      </div>
    </Container>
  );
};
