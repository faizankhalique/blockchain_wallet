import renderer from "react-test-renderer";
import Typography from "./index";

describe("Typography", () => {
  test("Typography component will return the component according to type prop otherwise undefined", () => {
    const h1 = renderer
      .create(<Typography type="h1">Heading 1</Typography>)
      .toJSON();
    const h2 = renderer
      .create(<Typography type="h2">Heading 2</Typography>)
      .toJSON();
    const h3 = renderer
      .create(<Typography type="h3">Heading 3</Typography>)
      .toJSON();
    const h4 = renderer
      .create(<Typography type="h4">Heading 4</Typography>)
      .toJSON();
    const p = renderer
      .create(<Typography type="p">Paragraph</Typography>)
      .toJSON();
    const tag = renderer.create(<Typography>Paragraph</Typography>).toJSON();
    expect(h1.type).toBe("h1");
    expect(h2.type).toBe("h2");
    expect(h3.type).toBe("h3");
    expect(h4.type).toBe("h4");
    expect(p.type).toBe("p");
    expect(tag?.type).toBe(undefined);
  });
});
