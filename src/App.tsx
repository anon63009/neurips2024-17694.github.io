import SlideImageBox from "./SlideImageBox";
import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import {
  bgColor,
  abstract,
  styleImages,
  subjectImages,
  msmsImages,
  multiImages,
  oneShotImages,
  subjectPersonalization,
  stylePersonalization,
  mySubjectMyStyle,
  oneShotPersonalization,
  multicomposition
} from "./const";
import Organization from "./Organization";
import AbstractBox from "./AbstractBox";
function App() {
  return (
    <>
      <WindowSizeContextProvider>
        <div className="w-screen h-screen min-w-[1400px]">
          {/* FIXME: Title, Author */}
          <TextBox
            title={
              <>
                Direct Consistency Optimization for Robust
                <br />
                Customization of Text-to-Image Diffusion models
              </>
            }
            backgroundColor={"white"}
            textColor={"balck"}
            titleFontSize={"text-5xl"}
          >
            <Organization />
          </TextBox>
          <TextBox
            title={"NeurIPS 2024 Submission"}
            backgroundColor={bgColor}
            textColor={"white"}
          />
          {/* FIXME: Abstract */}
          <AbstractBox
            title={"Abstract"}
            backgroundColor={"white"}
            textColor={"black"}
          >
            <Markdown text={abstract} />
          </AbstractBox>
          {/* FIXME: Subject Personalization*/}
          <TextBox
            title={"Subject Consistent Text-to-Image Generation"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={subjectPersonalization} />
          </TextBox>
          <SlideImageBox images={subjectImages} backgroundColor={"white"} />
          {/* FIXME: Style Personalization*/}
          <TextBox
            title={"Style Consistent Text-to-Image Generation"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={stylePersonalization} />
          </TextBox>
          <SlideImageBox images={styleImages} backgroundColor={"white"} />
          {/* FIXME: MSMS*/}
          <TextBox
            title={"My Subject in My style Generation"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={mySubjectMyStyle} />
          </TextBox>
          <SlideImageBox images={msmsImages} backgroundColor={"white"} />
          {/* FIXME: MSMS*/}
          <TextBox
            title={"Compositional Generation of My Subject in My Style"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={multicomposition} />
          </TextBox>
          <SlideImageBox images={multiImages} backgroundColor={"white"} />
          {/* FIXME: One shot */}
          <TextBox
            title={"One Shot Subject Personalization"}
            backgroundColor={bgColor}
            textColor={"white"}
          >
            <Markdown text={oneShotPersonalization} />
          </TextBox>
          <SlideImageBox images={oneShotImages} backgroundColor={"white"} />
          <TextBox
            title={""}
            backgroundColor={bgColor}
            textColor={"white"}
            last={true}
          >
            <div>
              We provide{" "}
              <a
                href="https://github.com/anon63009/neurips2024-17694.github.io/blob/main/assests/data.md"
                className="text-#4cc9f0 no-underline font-italic"
              >
                links
              </a>{" "}
              to image assets used in our experiments.
            </div>
          </TextBox>
        </div>
      </WindowSizeContextProvider>
    </>
  );
}

export default App;
