import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const Wellcome = () => {
  return (
    <div style={{margin:"7%"}}>
      <div className="side-banners">
        <div className="side right" style={{top:"0px"}}></div>
        <div className="side left"style={{top:"0px"}}></div>
      </div>
      <div className="container">
        <article>
          <div
            className="row article-details"
            style={{margin:"unset", paddingTop:"30px", padding:"20px 10px 0px 10px"}}
          >
            <div className="short-description">
              <p>ארגון אחד - עשרות דרכים לעזור</p>
            </div>
            <h1 className="header">מי אנחנו</h1>
          </div>

          <div
            className="row article-details"
            style={{margin:"unset", padding:"25px 10px 0px 10px"}}
          >
            <div className="main-content">
              <div className="bottom-container mobile no-max-width"></div>
              <div
                className="col-sm-6 article-main-content"
                style={{padding:"15px 0px 10px 0px"}}
              >
                <div className="right-container">
                  <p style={{direction: "rtl", textAlign: "justify"}}>
                    <span>
                      "עזר מציון" זוכת פרס ישראל לשנת תשס"ח, הינה העמותה הגדולה
                      בישראל בתחום התמיכה הרפואית. מאז הקמתה בשנת 1979, מושיטה
                      "עזר מציון" סיוע ותמיכה רפואיים לחולים ולמשפחותיהם,
                      לקשישים, לנזקקים ולאנשים במצבי משבר רבים ושונים, במטרה
                      לסייע להם להתגבר על הקשיים והמכשולים העומדים בפניהם.
                    </span>
                    <br />
                    <br />
                    <span>
                      המוטו של "עזר מציון" הינו הבחירה בחיים: הרצון האמיתי
                      והמאמץ האדיר לתת לכל אדם באשר הוא, ויהיה מצבו קשה ככל
                      שיהיה, את ההזדמנות לבחור בחיים.
                    </span>
                    <br />
                    <br />
                    <span>
                      "עזר מציון" מלווה את הנעזרים בכל שלבי ההתמודדות – עוטפת את
                      החולים ומשפחותיהם בחום, באהבה ובמערך רחב של שירותים
                      ייחודיים וחדשניים הניתנים בצורה מקצועית.
                    </span>
                    <br />
                    <br />
                    <span>
                      שירותי העמותה ניתנים באמצעות כ – 14 מחלקות ו – 30,000
                      מתנדבים ב- 58 מוקדי פעילות הפרושים על פני 31 ערים, בכל
                      רחבי המדינה. מעל 720,000 איש מכל הרקעים, המגזרים והגילאים,
                      מסתייעים בשירותי העמותה מדי שנה.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      הודות לתחושת השותפות, לרצון הטוב ולהיכרות המעמיקה עם
                      מצוקות החולים, הקשישים והמוגבלים, ממשיכה "עזר מציון" כל
                      העת להתפתח, לאתר צרכים וליצור דרכים חדשניות שיסייעו להושיט
                      יד לכל אדם, בכל זמן ובכל מקום.
                    </span>
                    <br></br>
                  </p>
                  <div>
                    <div className="container">
                      <div
                        className="row"
                        style={{margin:"unset", padding:"10px 0px 0px 0px"}}
                      >
                        <div className="col-12" style={{padding:"0px"}}>
                          <div className="srugim_share"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-6 article-mobile-hidden article-slider-wrapper"
                style={{padding:"5px 5px 10px 10px"}}
              >
                <div className="left-container" style={{width: "100%"}}></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
