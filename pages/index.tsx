import { Main } from "src/styles/sharedstyles";
import { Toggle } from "src/components";
import { useTheme } from "src/context";

export default function Home() {
  const { theme } = useTheme();
  return (
    <Main>
      <Toggle />
      <p>Now it's {theme} mode</p>
    </Main>
  );
}
