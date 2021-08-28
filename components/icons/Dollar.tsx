interface IProps {
  width: string;
  height: string;
}

function SvgComponent(props: IProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <image
        width={512}
        height={512}
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC/VBMVEUAAABzvDpxvDhxvzly vTlyvThmzDNzvjlxvjpxvTlmszNzvThyvDhyvDlyvTlyvTlyvTlyvTlxvDlzvDhzvDhwvjh2vzeA gAB3uzNzvDdxvTpyvDhxvTlyvTlyvTlyvTlzvTlyvTpxvjh0vzqAqisA/wBxuzlyvDlyvTpyvTlz vTlyvThxuDl1ujdyvTlyvTlxvjlyvDtttjd0uS5xvTlyvjlyvjpyvTlyvTlyvTlxvjprvDZzvTpy vDlyvTlyvTlyvTpzvDptwj1zvDlyvTlyvTmAv0BvvDdyvjpyvTpyvjpxvjlzvzNVqlVyvDlyvDly vjpxvTlyuTVyvTpyvTl1vTpyvjlzvTlyvDhwwj1ttklyvjlzvjlyvTpyvTlyvTlzvDhxvTl1vzVz vThyvTl4wzxyvTlyvTlyvTpwvzpyvTlyvTpzvjqAv0BxxjlzvDhyvTlzvTpyvjl0uTZyvjxyvTlw v0B0uzhyvTlzvTpyvTlyvTlzvjdxvTlvvjtxvTpyvTlzvzlxvTlyvTpyvjhyvTlxvTlqv0ByvThy vTlyvTlvuzxyvTlyvTlyvTlzvDlxvTlzvjhyvDZyvTl2ujtyvTlyvjtyvDhzuzd0vTpyvTlyvTly vTlyvTlyvTlzvThxvThyvTpzvTl2xDt0vDdzvTlyvTlxvDl0vjhyvjlxvTlyvThxvDlxvDxxvDpw vzhyvTpyvTlxvTlxvjlxvDlwvThxvjpxvTlyvThwuzhyvThyvDlxvTh0uTpyvTlyvDlyvjlxvDly vDlzvjhxvDpyvDpxvjl0vjpyvTlzvThxvTlyvTlyvjpxvDtyvTlyvTlyvTpxvTlyvjlzvThyvTly vDlyvjpzvjlyvTpzvjlyvThxvDhyvThzvDdyvTlxvTlzvTlyvTlzvThzvDlyvDhzvThxvjtyvjly vThxvztyvjpzvDlyvTlyvTlyvTlyvztxvTlyvDlzvTlyvjlyvDlyvThzvTlwvDpyuzlyvTlyvjlx vTpyvTlyvTn///9AXWyyAAAA/XRSTlMANUQkxYgFR2rjCmSRuNz799eZels7HAIPRXys2v3506mA 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 cmeb7jwaAAAAAElFTkSuQmCC"
      />
    </svg>
  );
}

export default SvgComponent;
