import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

import Ploy from "./Photo/ploy.jpg";

import Graph1 from "./GraphImg/graph1.svg";
import Graph2 from "./GraphImg/graph2.svg";
import Graph3 from "./GraphImg/graph3.svg";
import Graph4 from "./GraphImg/graph4.svg";
import Graph5 from "./GraphImg/graph5.svg";
import Graph6 from "./GraphImg/graph7.svg";

const URL = "littleboycoding.github.io/linear-inequality";

const Share = styled.a.attrs((props) => ({
  href: props.url,
  rel: "noreferrer",
  target: "_blank",
}))`
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s;
  margin-right: 10px;

  &:hover {
    background-color: darkblue;
    transition: all 0.3s;
  }
`;

function Section({ title, p, onFocus }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    onFocus(inView);
  }, [inView]);

  return (
    <section id={title} ref={ref}>
      <h2>{title}</h2>
      {typeof p === "string" ? <p>{p}</p> : p}
    </section>
  );
}

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Answer = styled.span`
  background-color: ${({ correct }) => correct || "#7a9e7e"};
  padding: 5px 10px;
  color: white;
  border-radius: 3px;
  margin: 10px 0px;
  transition: all 0.3s;

  ${({ correct }) =>
    !correct &&
    `
  &:hover {
    background-color: #2f5133;
    cursor: pointer;
    transition: all 0.3s;
  }
  `}
`;

function Question({ title, choices, correct }) {
  const [answer, answerSet] = useState(null);

  function selectAnswer(index) {
    answerSet(index);
  }

  return (
    <>
      <h3>แบบทดสอบ</h3>
      {title}
      <AnswerContainer>
        {choices.map((choice, index) => {
          if (answer === null)
            return (
              <Answer key={choice} onClick={() => selectAnswer(index)}>
                {choice}
              </Answer>
            );

          return answer === correct ? (
            <Answer
              key={choice}
              correct={index === answer ? "#7a9e7e" : "grey"}
            >
              {choice}
            </Answer>
          ) : (
            <Answer
              key={choice}
              correct={
                correct === index
                  ? "#7a9e7e"
                  : index === answer
                  ? "red"
                  : "grey"
              }
            >
              {choice}
            </Answer>
          );
        })}
      </AnswerContainer>
    </>
  );
}

const PhotoGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-bottom: 10px;

  figure {
    max-width: 100%;
    margin: 0;
  }
`;

const Table = styled.table`
  border-collapse: collapse;
  th,
  td {
    padding: 10px 15px;
    border: 1px solid #555;
  }
  th {
    background-color: #555;
    color: white;
  }
`;

function About() {
  return (
    <>
      <p>
        จัดทำโดยคณะนักศึกษาจาก วิทยาลัยอาชีวศึกษานครสวรรค์ สาขา พาณิชยกรรม
        แผนกเทคโนโลยีธุรกิจดิจิตัล ระดับการศึกษา ประกาศนียบัตรวิชาชีพชั้นสูง ปี
        1 เพื่อส่งงานในรายวิชาคณิตศาสตร์และสถิติเพื่องานอาชีพ รหัสวิชา
        30000-1401 สมาชิกทั้งหมด 4 คน ดังนี้
      </p>
      <PhotoGallery>
        <figure>
          <img
            alt="นายธณวัฒน์ ยอดนิล"
            src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/120433326_2067189880080899_4863950730108708947_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=fgKW_5XE7uMAX8Jgzgc&_nc_ht=scontent.fbkk5-5.fna&oh=39230892e05fea92a0eb9194fd3e351a&oe=6037F3DD"
          />
          <figcaption>นายธณวัฒน์ ยอดนิล</figcaption>
        </figure>
        <figure>
          <img
            alt="นางสาวศรสวรรค์ จำปางาม"
            src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/69633865_2357053704563516_4651109025021165568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=8bfeb9&_nc_ohc=jIMwKxGbapYAX82bRYJ&_nc_ht=scontent.fbkk5-8.fna&oh=49db5590c0758dd532deacb77dd6f447&oe=6037CE51"
          />
          <figcaption>นางสาวศรสวรรค์ จำปางาม</figcaption>
        </figure>
        <figure>
          <img
            alt="นางสาวรัตมณี หมื่นแผ้ว"
            src="https://scontent.fbkk5-1.fna.fbcdn.net/v/t31.0-8/28238593_416111472172797_1187444133032502488_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=-1YtNXv-z90AX_BmpjX&_nc_ht=scontent.fbkk5-1.fna&oh=577f55e4cd75ab13e79b70394434717a&oe=6036852B"
          />
          <figcaption>นางสาวรัตมณี หมื่นแผ้ว</figcaption>
        </figure>
        <figure>
          <img alt="นางสาวชลธิชา เทียนทอง" src={Ploy} />
          <figcaption>นางสาวชลธิชา เทียนทอง</figcaption>
        </figure>
      </PhotoGallery>
    </>
  );
}

function FirstSection() {
  return (
    <>
      <p>
        <b>อสมการ</b>
        {` คือ ประโยคสัญลักษณ์ที่แสดงความสัมพันธ์ของจำนวนโดยมีสัญลักษณ์ น้อยกว่า (<), มากกว่า (>), น้อยกว่าหรือเท่ากับ (<=), มากกว่าหรือเท่ากับ (>=), และไม่เท่ากับ (!=) บอกความสัมพันธ์ของจำนวน เช่น`}
      </p>

      <pre>
        {`8 > 4
12 < 18
3x + 2 >= 10
x != 5`}
      </pre>

      <p>
        อสมการที่มีตัวแปรเดียว และกำลังตัวแปรเป็นหนึ่ง เรียกว่า
        อสมการเชิงเส้นตัวแปรเดียว เช่น
      </p>
      <pre>
        {`5 >= 0
y < 1
5x +3 <= 10`}
      </pre>

      <p>
        อสมการที่มีสองตัวแปร และกำลังตัวแปรเป็นหนึ่ง เรียกว่า
        อสมการเชิงเส้นสองตัวแปร เช่น
      </p>
      <pre>
        {`x + y >= 10
y < 2x + 5`}
      </pre>

      <p>
        โดยรวมกล่าวอีกนัยหนึ่ง อสมการเชิงเส้น หมายความถึง
        อสมการเชิงเส้นตัวแปรเดียว และอสมการเชิงเส้นสองตัวแปร
      </p>
      <Question
        title="อสมการที่มีสองตัวแปร และกำลังตัวแปรเป็นหนึ่ง เรียกว่าอะไร"
        choices={[
          "อสมการเชิงเส้นตัวแปรเดียว",
          "อสมการเชิงเส้นสองตัวแปร",
          "อสมการเชิงเส้น",
          "อสมการเชิงเส้นคู่",
        ]}
        correct={1}
      />
    </>
  );
}

function SecondSection() {
  return (
    <>
      <p>
        กราฟของอสมการเชิงเส้น คือ
        กราฟของคู่อันดับหรือความสัมพันธ์ที่เขียนกราฟบนระนาบหรือระบบแกนมุมฉาก
      </p>

      <p>
        การเขียนกราฟของอสมการเชิงเส้นทำได้โดยการเปลี่ยนเครื่องหมายจากอสมการเป็นเครื่องหมายสมการ
      </p>

      <p>พิจารณากราฟของอสมการ x + y = 4</p>
      <p>
        ในการเขียนกราฟสมการเส้นตรงทำได้โดยหาจุดตัดแกน x คือ (x, 0) และจุดตัดแกน
        y คือ (0, y) นั่นคือ
      </p>

      <Table>
        <tbody>
          <tr>
            <th>X</th>
            <td>0</td>
            <td>4</td>
          </tr>
          <tr>
            <th>Y</th>
            <td>4</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>

      <p>จะได้กราฟสมการ x + y = 4 ดังนี้</p>
      <img alt="graph" src={Graph1} />

      <p>
        จากกราฟสมการ x + y = 4 คือจุดทุกจุดบนเส้นตรง x + y = 4
        จะเห็นว่าเส้นตรงดังกล่าวแบ่งระนาบออกเป็น 2 ส่วนคือ
      </p>

      <ul>
        <li>{`ส่วนที่หนึ่ง คือ ส่วนที่จุดทุกจุดสอดคล้องกับอสมการ x + y > 4 (บริเวณเหนือกราฟ)`}</li>
        <li>
          {`ส่วนที่สอง คือ ส่วนที่จุดทุกจุดสอดคล้องกับอสมการ x + y < 4 (บริเวณใต้เส้นกราฟ)`}
        </li>
      </ul>

      <p>
        ในการพิจารณาว่าบริเวณใดสอดคล้องกับอสมการที่กำหนด
        ทำได้โดยการนำจุดของแต่ละส่วนไปแทนที่ในค่าอสมการ
        เพื่อตรวจว่าทำให้อสมการนั้นเป็นจริงได้หรือไม่ ดังนี้
      </p>
      <p>
        {`● แทนค่า (0, 0) ซึ่งอยู่ใต้เส้นกราฟ x + y = 4 จะได้ 0 + 0 = 0 ซึ่งน้อยกว่า 4 ทำให้กราฟ x + y < 4 และ x + y <= 4 อยู่ใต้เส้นกราฟ x + y = 4 (คืออาณาบริเวณอยู่ด้านเดียวกับจุด (0, 0) ซึ่งแสดงบริแรเงา)`}
      </p>
      <img alt="graph" src={Graph2} />

      <p>
        {`กราฟของ x + y < 4 คือบริเว้นแรเงาใต้เส้นกราฟ x + y = 4 โดยไม่รวมเส้นกราฟ x + y = 4 (ดังเส้นประของภาพ)`}
      </p>
      <img alt="graph" src={Graph3} />

      <p>
        {`กราฟของ x + y <= 4 คือ อาณาบริเวณแรเงาใต้เส้นกราฟ x + y = 4 โดยรวมเส้นกราฟ x + y = 4 (ดังเส้นทึบของกราฟ)`}
      </p>
      <p>
        {`● แทนค่า (4, 4) ซึ่งอยู่เหนือเส้นกราฟ x + y = 4 จะได้ 4 + 4 = 8 ซึ่งมากกว่า 4 ทำให้กราฟ x + y > 4 และ x + y >= 4 อยู่เหนือเส้นกราฟ x + y 4`}
      </p>
      <img alt="graph" src={Graph4} />

      <p>
        {`กราฟของ x + y > 4 คือบริเวณแรเงาเหนือเส้นกราฟ x + y = 4 โดยไม่รวมเส้นกราฟ x + y = 4 (ดังเส้นประของกราฟ)`}
      </p>
      <img alt="graph" src={Graph5} />

      <p>
        {`กราฟของ x + y >= 4 คือ อาณาบริเวณแรเงาเหนือเส้นกราฟ x + y = 4 โดยรวมเส้นกราฟ x + y = 4 (ดังเส้นทึบของกราฟ)`}
      </p>
      <Question
        title={
          <>
            <p>กราฟนี้เป็นกราฟจากสมการใด</p>
            <img src={Graph6} alt="graph" />
          </>
        }
        choices={["x + y = 9", "x + y = 11", "x + y = 10", "x + y = 9.5"]}
        correct={2}
      />
    </>
  );
}
function ThirdSection() {
  return (
    <>
      <p>
        <b>ระบบอสมการเชิงเส้น</b> คือ
        อสมการเชิงเส้นหลายอสมการตั้งแต่สองอสมการขึ้นไป
      </p>
      <p>
        <b>กราฟของระบบอสมการเชิงเส้น</b> คือ
        กราฟของอสมการเชิงเส้นหลายอสมการที่เขียนในระบบแกนพิกัดมุมฉากเดียวกัน
      </p>

      <p>การเขียนกราฟของระบบอสมการเชิงเส้นมีขั้นตอนดังนี้</p>
      <ol>
        <li>
          เขียนกราฟของสมการเชิงเส้นหรืออสมการเส้นตรง (หาพิกัดของจุดตัดแกน x
          และจุดตัดแกน y)
        </li>
        <li>หาอาณาบริเวณแรเงาที่สอดคล้องกับอสมการทุกอสมการ</li>
        <li>หาจุดตัดของระบบอสมการเชิงเส้น</li>
      </ol>
      <Question
        title="การเขียนกราฟของระบบอสมการเชิงเส้นมีกี่ขั้นตอน"
        choices={["1 ขั้นตอน", "2 ขั้นตอน", "3 ขั้นตอน", "4 ขั้นตอน"]}
        correct={2}
      />
    </>
  );
}

const Sections = [
  {
    title: "ยินดีต้อนรับ",
    p: (
      <>
        <p>
          เว็บไซต์นี้จะสอนเกี่ยวกับอสมการเชิงเส้น (Linear inequality)
          มีภาพประกอบ พร้อมกับคำถามทดสอบการเรียนรู้
        </p>
        <p>
          เลื่อนลงเพื่ออ่านเนื้อหา หรือเลือกเนื้อหาจากเมนูทางด้านซ้าย
          (หากใช้งานโทรศัพท์สามารถสไลด์ซ้ายขวาเพื่อ เปิด-ปิด เมนูได้)
        </p>
        <p>
          <q>ขอให้โชคดีและมีความสุขกับการเรียนรู้ครับ 🎉</q> -{" "}
          <i>คณะผู้จัดทำ</i>
        </p>
      </>
    ),
  },
  {
    title: "อสมการคืออะไร",
    p: <FirstSection />,
  },
  {
    title: "กราฟของอสมการเชิงเส้น",
    p: <SecondSection />,
  },
  {
    title: "กราฟของระบบอสมการเชิงเส้น",
    p: <ThirdSection />,
  },
  {
    title: "สรุป",
    p: (
      <>
        <p>{`อสมการ คือ ประโยคสัญลักษณ์ที่แสดงความสัมพันธ์ของจำนวนโดยมีสัญลักษณ์ <, >, <=, >= และ !=`}</p>
        <p>{`อสมการเชิงเส้นตัวแปรเดียว เช่น x >= 5, x + 2 <= 4 เป็นต้น`}</p>
        <p>{`อสมการเชิงเส้นสองตัวแปร เช่น 2x + y <= 3, y <= x + 1 เป็นต้น`}</p>
        <p>
          กราฟของอสมการเชิงเส้น คือ
          กราฟของคู่อันดับหรือกราฟของความสัมพันธ์ที่เขียนในระบบแกนมุมฉาก
        </p>
      </>
    ),
  },
  {
    title: "Congratulation !",
    p: (
      <>
        <p>
          จบแล้วสำหรับเนื้อหาอสมการเชิงเส้น แบ่งปันความสำเร็จนี้ให้เพื่อนดูสิ 🏆
        </p>
        <Share
          url={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
          color="#3b5998"
        >
          แชร์บน Facebook
        </Share>
        <Share
          url={`http://www.twitter.com/share?text=เรียนคณิตศาสตร์เรื่อง อสมการเชิงเส้น&url=${URL}`}
          color="#00acee"
        >
          Tweet
        </Share>
      </>
    ),
  },
  {
    title: "เกี่ยวกับผู้จัดทำ",
    p: <About />,
  },
];

export { Section, Sections };
