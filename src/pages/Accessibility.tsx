import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Accessibility = () => (
  <>
    <Helmet>
      <title>הצהרת נגישות — Cypel</title>
      <meta name="description" content="הצהרת נגישות של אתר Cypel — פרטי הנגשה, תקנים ודרכי יצירת קשר." />
      <link rel="canonical" href="https://cypel.lovable.app/accessibility" />
      <meta property="og:title" content="הצהרת נגישות — Cypel" />
      <meta property="og:description" content="הצהרת נגישות של אתר Cypel — פרטי הנגשה, תקנים ודרכי יצירת קשר." />
      <meta property="og:url" content="https://cypel.lovable.app/accessibility" />
      <meta property="og:type" content="website" />
    </Helmet>
    <main dir="rtl" className="min-h-dvh container mx-auto px-4 py-24 max-w-3xl">
      <Link to="/" className="text-primary hover:underline text-sm font-mono" dir="ltr">← Back</Link>
      <h1 className="text-4xl md:text-5xl font-display font-bold mt-6 mb-8 tracking-tight">
        הצהרת <span className="text-gradient">נגישות</span>
      </h1>
      <div className="space-y-4 text-foreground/90 leading-relaxed">
        <p>
          אתר Cypel פועל להנגשת תכניו עבור כלל הציבור, לרבות אנשים עם מוגבלות,
          בהתאם להוראות חוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח-1998, ולתקנות הנגישות.
        </p>
        <p>
          אנו משקיעים מאמצים על-מנת לעמוד בתקן הישראלי ת״י 5568 ברמת AA, המבוסס על הנחיות
          WCAG 2.1 של ארגון W3C.
        </p>
        <p>
          האתר תומך בניווט באמצעות מקלדת, מבני כותרות סמנטיים, ניגודיות צבעים מתאימה, וטקסטים
          חלופיים לתמונות. ייתכן ובחלקים מסוימים של האתר נמצאו רכיבים שטרם הונגשו במלואם, ואנו
          פועלים לתקנם.
        </p>
        <p>
          אם נתקלתם בקושי בגלישה או ברכיב שאינו נגיש, נשמח שתפנו אלינו ונטפל בנושא בהקדם.
        </p>
        <p className="font-semibold">פרטי רכז הנגישות:</p>
        <ul className="list-disc pr-6 space-y-1">
          <li>שם: אסף אפלבאום</li>
          <li>טלפון: 052-837-3362</li>
          <li>דוא״ל ניתן לקבלת קישור דרך עמוד יצירת הקשר</li>
        </ul>
        <p className="text-muted-foreground text-sm">תאריך עדכון אחרון: {new Date().getFullYear()}</p>
      </div>
    </main>
  </>
);

export default Accessibility;
