import {
  Blockquote,
  H1,
  H2,
  H3,
  H4,
  Large,
  Lead,
  List,
  Muted,
  Paragraph,
  Small,
} from "@/components/ui/typography"

const TypographyPage = () => {
  return (
    <div className="container mt-8 grid gap-4">
      <H1>H1: Quick fox jumps nightly above wizard</H1>

      <H2>H2: Quick fox jumps nightly above wizard</H2>

      <H3>H3: Quick fox jumps nightly above wizard</H3>

      <H4>H4: Quick fox jumps nightly above wizard</H4>

      <Paragraph>Paragraph: Quick fox jumps nightly above wizard</Paragraph>

      <Lead>Lead: Quick fox jumps nightly above wizard</Lead>

      <Large>Large: Quick fox jumps nightly above wizard</Large>

      <Small>Small: Quick fox jumps nightly above wizard</Small>

      <Muted>Muted: Quick fox jumps nightly above wizard</Muted>

      <Blockquote>Blockquote: Quick fox jumps nightly above wizard</Blockquote>

      <List>
        <li>Quick fox jumps nightly above wizard</li>

        <li>Quick fox jumps nightly above wizard</li>

        <li>Quick fox jumps nightly above wizard</li>
      </List>
    </div>
  )
}

export default TypographyPage
