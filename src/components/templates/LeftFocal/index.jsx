import "./styles.scss";
import Badge from "../../atoms/Badge";
import CardRegular from "../../molecules/CardRegular";
import { MOCK_DATA } from "../../../Mock";
import AuthorCard from "../../molecules/AuthorCard";

const getCardRegularProps = (type) =>
  ({
    PRINCIPAL: {
      sizeTitle: "XXL",
      weightTitle: "bold",
      colorLead: "dark",
    },
    NOTA: {
      sizeTitle: "XXL",
      weightTitle: "bold",
      colorLead: "strongBlue",
    },
    REGULAR: {
      sizeTitle: "XXL",
      weightTitle: "medium",
      colorLead: "strongBlue",
    },
    SIMPLE: {
      sizeTitle: "XL",
      weightTitle: "medium",
    },
    AUTHORBOLD: {
      sizeTitle: "XXL",
      weightTitle: "bold",
    },
  }[type] || {});

const LeftFocal = () => {
  return (
    <div className="grid-template-container">
      {MOCK_DATA.map((note, index) => (
        <div
          className={`content width-${note.width} height-${note.height}`}
          key={index}
        >
          {(note.type === "AUTHORBOLD" && (
            <AuthorCard
              lead={note.title.lead}
              note={note.title.title}
              colorLead="strongBlue"
              authorName={note.sign.label}
              urlImg={note.urlImage.url}
              urlNote={note.urlNote.url}
              alt={note.urlNote.alt}
              {...getCardRegularProps(note.type)}
            />
          )) ||
            (note.type === "AUTHORBOLD" && (
              <AuthorCard
                lead={note.title.lead}
                note={note.title.title}
                colorLead="strongBlue"
                authorName={note.sign.label}
                urlImg={note.urlImage.url}
                urlNote={note.urlNote.url}
                alt={note.urlNote.alt}
                {...getCardRegularProps(note.type)}
              />
            )) || (
              <CardRegular
                cardReverse={note.reverse}
                leadTitle={note.title.lead}
                title={note.title.title}
                leadParagraph={note.paragraph.lead}
                paragraph={note.paragraph.paragraph}
                marquee={note.marquee.title}
                labelMarquee={note.marquee.label}
                separatorMaquee={note.marquee.separator || false}
                alt={note.urlImage.alt}
                urlImg={note.urlImage.url || ""}
                urlNote={note.urlNote.url}
                {...getCardRegularProps(note.type)}
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default LeftFocal;