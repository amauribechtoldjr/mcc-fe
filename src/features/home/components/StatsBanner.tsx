import { Container } from "@components/Container";
import { Typography } from "@components/Typography";
import type { HomeStat } from "@features/home/mocks/home.mock";

type StatsBannerProps = {
  stats: HomeStat[];
};

export const StatsBanner = ({ stats }: StatsBannerProps) => {
  return (
    <section className="bg-mred py-5">
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-2">
          {stats.map((stat) => (
            <li key={stat.label} className="flex items-center gap-2">
              <Typography colors="orange" weight="bold">
                {stat.value}
              </Typography>
              <Typography colors="white">{stat.label}</Typography>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
