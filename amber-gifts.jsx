import { useEffect } from "react";

const topGifts = [
  {
    name: "Mercy",
    score: 25,
    color: "#B5556A",
    light: "#F9E8ED",
    verse: "Romans 12:8",
    icon: "💗",
    aha: "That's why strangers open up to you in five minutes flat.",
    army: "You noticed the Soldier who said 'I'm fine' but wasn't. People trusted you before they trusted leadership.",
    rize: "Prayer care team, newcomer follow-up, one-on-one encouragement, women's care support.",
    friend: "Manny checks on you too. Not just the other way around.",
    watch: "You may feel responsible for everyone's emotions. You're not. Galatians 6:2-5 gives you both verses, not just the soft one.",
  },
  {
    name: "Faith",
    score: 22,
    color: "#7A6EA0",
    light: "#EEE9F6",
    verse: "Hebrews 11:1",
    icon: "✨",
    aha: "That's why people call you when they're panicking. You're the calm in the room.",
    army: "PCS chaos, field stress, toxic climates. You were the 'God's still got us' anchor people borrowed from.",
    rize: "Prayer nights, intercession, encouraging young adults through uncertainty, steady hope-keeping.",
    friend: "Manny doesn't need you to perform faith. Just be honest when your own tank is low too.",
    watch: "Faith is not denial. You still need wisdom, honest processing, and real plans alongside your trust.",
  },
  {
    name: "Giving",
    score: 22,
    color: "#C9963D",
    light: "#FBF1DF",
    verse: "2 Corinthians 9:7",
    icon: "🌿",
    aha: "That's why you remember people's favorite food, drink, comfort item. It's not random. It's love through attention.",
    army: "Care packages, bringing meals, quietly covering gaps, helping families during deployments.",
    rize: "Fellowship food, care baskets, outreach supply, benevolence. Your generosity builds culture.",
    friend: "Manny pays attention to your needs too. You don't always have to be the one giving.",
    watch: "God loves a cheerful giver, not a guilt-driven one (2 Cor 9:7). If you're giving from exhaustion, that's a signal.",
  },
  {
    name: "Service",
    score: 21,
    color: "#6B8F71",
    light: "#E8F2EA",
    verse: "1 Peter 4:10",
    icon: "🤝",
    aha: "That's why you already handled it before anyone asked. That 'little thing' you did? Someone felt loved.",
    army: "Setup, morale events, quietly solving logistics problems leaders missed, helping new Soldiers land.",
    rize: "Guest experience, food coordination, setup, follow-up. The behind-the-scenes work that holds everything together.",
    friend: "Your service is seen and valued. Manny says thank you specifically, not just in general.",
    watch: "Helpers become invisible until they stop. You need leaders who see you, not just use you.",
  },
  {
    name: "Discernment",
    score: 20,
    color: "#9A6B7F",
    light: "#F5EBF0",
    verse: "1 Corinthians 12:10",
    icon: "👁️",
    aha: "That's why you can tell something is off before anyone says a word. You're not just sweet. You're sharp.",
    army: "You read the room. You sensed when morale was dropping, when someone's words didn't match their actions.",
    rize: "Atmosphere protection, prayer team, helping notice who needs follow-up, flagging when something feels spiritually heavy.",
    friend: "When something feels off to you, say it gently. Manny wants that honest read, not just encouragement.",
    watch: "Discernment must stay submitted to Scripture, prayer, and counsel. Test impressions. Don't weaponize them.",
  },
  {
    name: "Hospitality",
    score: 19,
    color: "#C4744A",
    light: "#FAECE4",
    verse: "Hebrews 13:2",
    icon: "🏡",
    aha: "That's why your cooking doesn't just taste like food. It tastes like home. It tastes like safety.",
    army: "You made people feel like they belonged somewhere in environments built to feel temporary.",
    rize: "Fellowship meals, dinner Bible studies, newcomer nights, 'come eat and talk' gatherings. Your table is ministry.",
    friend: "You don't have to cook to care. But when you do, know that Manny sees the love behind it.",
    watch: "Don't become 'the food girl.' Your hospitality is Kingdom infrastructure, not a free catering service.",
  },
];

const allGifts = [
  { name: "Mercy", score: 25 },
  { name: "Faith", score: 22 },
  { name: "Giving", score: 22 },
  { name: "Service", score: 21 },
  { name: "Discernment", score: 20 },
  { name: "Hospitality", score: 19 },
  { name: "Leadership", score: 16 },
  { name: "Admin", score: 16 },
  { name: "Exhortation", score: 16 },
  { name: "Wisdom", score: 15 },
  { name: "Apostleship", score: 14 },
  { name: "Evangelism", score: 13 },
  { name: "Knowledge", score: 11 },
  { name: "Shepherding", score: 10 },
  { name: "Teaching", score: 10 },
  { name: "Prophecy", score: 8 },
];

export default function AmberGifts() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const s = {
    root: {
      fontFamily: "'DM Sans', sans-serif",
      background: "#FBF4EC",
      color: "#2C1A10",
      maxWidth: 820,
      margin: "0 auto",
      padding: "0 0 60px 0",
    },
    header: {
      background: "linear-gradient(135deg, #2C1A10 0%, #5A2D1A 60%, #8B3A2A 100%)",
      padding: "52px 40px 44px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    headerOverlay: {
      position: "absolute",
      inset: 0,
      backgroundImage:
        "radial-gradient(circle at 20% 50%, rgba(201,150,61,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(181,85,106,0.12) 0%, transparent 40%)",
      pointerEvents: "none",
    },
    rizeLabel: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      fontSize: 11,
      letterSpacing: "0.25em",
      color: "#C9963D",
      textTransform: "uppercase",
      marginBottom: 16,
    },
    headerName: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 68,
      fontWeight: 700,
      color: "#FBF4EC",
      lineHeight: 1,
      marginBottom: 8,
    },
    headerSub: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 20,
      fontStyle: "italic",
      color: "#E8C99A",
      marginBottom: 20,
    },
    headerVerse: {
      display: "inline-block",
      background: "rgba(201,150,61,0.2)",
      border: "1px solid rgba(201,150,61,0.4)",
      borderRadius: 4,
      padding: "6px 16px",
      fontSize: 12,
      color: "#E8C99A",
      letterSpacing: "0.05em",
    },
    tagline: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 17,
      fontStyle: "italic",
      color: "#C5A882",
      marginTop: 18,
      lineHeight: 1.5,
    },
    body: {
      padding: "0 32px",
    },
    sectionTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 28,
      fontWeight: 600,
      color: "#2C1A10",
      marginBottom: 6,
    },
    sectionPill: {
      display: "inline-block",
      background: "#2C1A10",
      color: "#FBF4EC",
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      padding: "4px 12px",
      borderRadius: 3,
      marginBottom: 16,
    },
    divider: {
      height: 1,
      background: "linear-gradient(90deg, #C9963D, transparent)",
      margin: "36px 0 28px",
    },
    barWrap: {
      marginBottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    barLabel: {
      width: 100,
      fontSize: 13,
      fontWeight: 500,
      flexShrink: 0,
      color: "#2C1A10",
    },
    barTrack: {
      flex: 1,
      height: 14,
      background: "#EDE0CE",
      borderRadius: 7,
      overflow: "hidden",
      position: "relative",
    },
    barScore: {
      fontSize: 12,
      fontWeight: 600,
      color: "#7A5A3A",
      width: 36,
      textAlign: "right",
      flexShrink: 0,
    },
    giftCard: {
      background: "#FFF8F0",
      border: "1px solid #EDE0CE",
      borderRadius: 12,
      padding: "22px 22px 18px",
      marginBottom: 16,
      position: "relative",
      overflow: "hidden",
    },
    giftCardAccent: {
      position: "absolute",
      top: 0,
      left: 0,
      width: 4,
      bottom: 0,
      borderRadius: "12px 0 0 12px",
    },
    giftHeader: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 10,
    },
    giftIcon: {
      fontSize: 22,
    },
    giftName: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 22,
      fontWeight: 700,
      flex: 1,
    },
    giftScore: {
      fontSize: 13,
      fontWeight: 700,
      padding: "3px 10px",
      borderRadius: 20,
      color: "#fff",
    },
    ahaBox: {
      background: "rgba(201,150,61,0.1)",
      border: "1px solid rgba(201,150,61,0.25)",
      borderRadius: 8,
      padding: "10px 14px",
      fontSize: 14,
      fontStyle: "italic",
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: 1.5,
      marginBottom: 14,
      color: "#6B3E1A",
    },
    microGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10,
      marginBottom: 12,
    },
    microCard: {
      background: "#FBF4EC",
      borderRadius: 8,
      padding: "10px 12px",
      fontSize: 12.5,
      lineHeight: 1.55,
    },
    microLabel: {
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 4,
      opacity: 0.7,
    },
    watchBox: {
      background: "rgba(181,85,106,0.07)",
      border: "1px solid rgba(181,85,106,0.2)",
      borderRadius: 8,
      padding: "9px 13px",
      fontSize: 12.5,
      lineHeight: 1.5,
      color: "#7A2A3A",
      display: "flex",
      gap: 8,
      alignItems: "flex-start",
    },
    verseTag: {
      display: "inline-block",
      fontSize: 11,
      fontWeight: 600,
      padding: "2px 9px",
      borderRadius: 10,
      color: "#fff",
      marginTop: 10,
    },
    twoCol: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14,
    },
    scriptureCard: {
      background: "#FFF8F0",
      border: "1px solid #EDE0CE",
      borderRadius: 10,
      padding: "16px 18px",
    },
    scriptureRef: {
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 4,
      color: "#C9963D",
    },
    scriptureText: {
      fontSize: 13,
      lineHeight: 1.6,
      color: "#5A3A20",
    },
    closingBox: {
      background: "linear-gradient(135deg, #2C1A10, #5A2D1A)",
      borderRadius: 16,
      padding: "36px 36px 32px",
      textAlign: "center",
      marginTop: 36,
      position: "relative",
      overflow: "hidden",
    },
    closingTitle: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 30,
      fontWeight: 700,
      color: "#FBF4EC",
      marginBottom: 14,
    },
    closingText: {
      fontSize: 14,
      lineHeight: 1.8,
      color: "#C5A882",
      maxWidth: 560,
      margin: "0 auto 20px",
    },
    closingVerse: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 16,
      fontStyle: "italic",
      color: "#E8C99A",
      borderTop: "1px solid rgba(201,150,61,0.3)",
      paddingTop: 18,
      marginTop: 4,
    },
  };

  return (
    <div style={s.root}>
      {/* HEADER */}
      <div style={s.header}>
        <div style={s.headerOverlay} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={s.rizeLabel}>RIZE Young Adult Ministry</div>
          <div style={s.headerName}>Amber</div>
          <div style={s.headerSub}>Your Spiritual Gift Profile</div>
          <div style={s.headerVerse}>1 Peter 4:10 &mdash; As each has received a gift, use it to serve one another</div>
          <div style={s.tagline}>
            Not loud. Not flashy. But deeply Kingdom-useful.
          </div>
        </div>
      </div>

      <div style={s.body}>
        {/* INTRO BLURB */}
        <div style={{ padding: "28px 0 0", marginBottom: 8 }}>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#4A2E18" }}>
            Amber, this is what the assessment picked up. But if we are honest, people around you have
            seen this for a while. They just never had the language for it. This is the language.
          </p>
        </div>

        <div style={s.divider} />

        {/* CHART SECTION */}
        <div style={s.sectionPill}>Your Scores at a Glance</div>
        <div style={s.sectionTitle}>What These Numbers Mean</div>
        <p style={{ fontSize: 13.5, color: "#7A5A3A", marginBottom: 20, lineHeight: 1.6 }}>
          Each gift is scored out of 25. These are not grades. They show where God has naturally wired you
          to serve. The longer the bar, the stronger the grace.
        </p>

        {allGifts.map((g, i) => {
          const isTop = i < 6;
          const giftData = topGifts.find((t) => t.name === g.name);
          const barColor = isTop ? (giftData?.color || "#C9963D") : "#C5B8A8";
          const pct = (g.score / 25) * 100;
          return (
            <div key={g.name} style={s.barWrap}>
              <div style={{ ...s.barLabel, fontWeight: isTop ? 600 : 400, opacity: isTop ? 1 : 0.6 }}>
                {isTop && <span style={{ marginRight: 4 }}>{giftData?.icon}</span>}
                {g.name}
              </div>
              <div style={s.barTrack}>
                <div
                  style={{
                    height: "100%",
                    width: `${pct}%`,
                    background: isTop
                      ? `linear-gradient(90deg, ${barColor}, ${barColor}CC)`
                      : "#C5B8A8",
                    borderRadius: 7,
                    transition: "width 0.6s ease",
                  }}
                />
              </div>
              <div style={{ ...s.barScore, fontWeight: isTop ? 700 : 400, opacity: isTop ? 1 : 0.55 }}>
                {g.score}/25
              </div>
            </div>
          );
        })}

        <p style={{ fontSize: 12, color: "#9A7A5A", marginTop: 10, fontStyle: "italic" }}>
          Highlighted gifts are your top 6. Supporting gifts are present and real, just not your primary lane right now.
        </p>

        <div style={s.divider} />

        {/* GIFT CARDS */}
        <div style={s.sectionPill}>Gift by Gift Breakdown</div>
        <div style={s.sectionTitle}>The Aha Moments</div>
        <p style={{ fontSize: 13.5, color: "#7A5A3A", marginBottom: 24, lineHeight: 1.6 }}>
          Read each one slowly. You might catch yourself saying "wait, that actually makes sense."
        </p>

        {topGifts.map((g) => (
          <div key={g.name} style={s.giftCard}>
            <div style={{ ...s.giftCardAccent, background: g.color }} />
            <div style={{ paddingLeft: 14 }}>
              <div style={s.giftHeader}>
                <span style={s.giftIcon}>{g.icon}</span>
                <span style={{ ...s.giftName, color: g.color }}>{g.name}</span>
                <span style={{ ...s.giftScore, background: g.color }}>
                  {g.score}/25
                </span>
              </div>
              <div style={s.ahaBox}>"{g.aha}"</div>
              <div style={s.microGrid}>
                <div style={{ ...s.microCard, borderLeft: `3px solid ${g.color}30` }}>
                  <div style={{ ...s.microLabel, color: g.color }}>In the Army</div>
                  {g.army}
                </div>
                <div style={{ ...s.microCard, borderLeft: `3px solid ${g.color}30` }}>
                  <div style={{ ...s.microLabel, color: g.color }}>In RIZE</div>
                  {g.rize}
                </div>
              </div>
              <div style={{ ...s.microCard, borderLeft: `3px solid ${g.color}30`, marginBottom: 10, fontSize: 12.5, lineHeight: 1.55, background: "#FBF4EC", borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ ...s.microLabel, color: g.color }}>As Manny's Friend</div>
                {g.friend}
              </div>
              <div style={s.watchBox}>
                <span style={{ fontSize: 14, marginTop: 1 }}>⚠️</span>
                <div><strong>Keep Watch:</strong> {g.watch}</div>
              </div>
              <span style={{ ...s.verseTag, background: g.color }}>{g.verse}</span>
            </div>
          </div>
        ))}

        <div style={s.divider} />

        {/* YOUR ROLE IN RIZE */}
        <div style={s.sectionPill}>Your Lane</div>
        <div style={s.sectionTitle}>RIZE Hospitality and Care Coordinator</div>
        <div
          style={{
            background: "linear-gradient(135deg, #FFF8F0, #FBF0E4)",
            border: "1px solid #EDE0CE",
            borderRadius: 14,
            padding: "24px 24px",
            marginBottom: 28,
          }}
        >
          <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 16, color: "#4A2E18" }}>
            The mission: Help create a Spirit-led environment where people are welcomed, nourished,
            remembered, and cared for. Not "the food girl." The person who makes people feel like they
            belong before they even know why.
          </p>
          <div style={s.twoCol}>
            {[
              ["What You Do", "Welcome newcomers. Coordinate meals and fellowship. Notice who needs follow-up. Support women who need encouragement. Build warmth into the group culture."],
              ["What You Don't Do", "Pay for everything alone. Become everyone's counselor. Say yes to every request. Carry heavy pastoral issues solo. Serve without a small team behind you."],
            ].map(([title, text]) => (
              <div
                key={title}
                style={{
                  background: "#FBF4EC",
                  borderRadius: 10,
                  padding: "14px 16px",
                  border: "1px solid #EDE0CE",
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#C9963D",
                    marginBottom: 8,
                  }}
                >
                  {title}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.65 }}>{text}</div>
              </div>
            ))}
          </div>
        </div>

        {/* THINGS YOU MAY HAVE MISSED */}
        <div style={s.sectionPill}>Things You May Have Missed About Yourself</div>
        <div style={s.sectionTitle}>You May Not Have Realized...</div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            marginBottom: 28,
          }}
        >
          {[
            "Your kindness has spiritual weight.",
            "Your cooking can open doors for ministry.",
            "You don't have to be loud to be used by God.",
            "Your discernment and mercy make you safe and sharp at the same time.",
            "Remembering small things about people is part of how you love prophetically.",
            "You are probably more valuable in small rooms than big stages right now.",
            "Your quiet service may have more impact than public recognition.",
            "You are not 'just nice.' You carry grace-gifts.",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#FFF8F0",
                border: "1px solid #EDE0CE",
                borderRadius: 8,
                padding: "12px 14px",
                fontSize: 13.5,
                lineHeight: 1.6,
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
              }}
            >
              <span style={{ color: "#C9963D", fontWeight: 700, marginTop: 1 }}>›</span>
              {item}
            </div>
          ))}
        </div>

        <div style={s.divider} />

        {/* SCRIPTURES */}
        <div style={s.sectionPill}>Biblical Grounding</div>
        <div style={s.sectionTitle}>Scripture Anchors for Your Gifts</div>
        <div style={{ ...s.twoCol, marginBottom: 30 }}>
          {[
            ["Romans 12:6-13", "Your entire gift cluster is named here: mercy, giving, service, exhortation, hospitality. This is your chapter."],
            ["1 Corinthians 12:4-7", "Gifts are given for the common good. Not for performance. Not for pressure."],
            ["1 Peter 4:8-11", "Hospitality and service are how we steward God's grace to others."],
            ["Galatians 6:2-5", "Bear one another's burdens. AND each one must carry their own load. You need both verses."],
            ["Luke 10:38-42", "Serve, but do not neglect sitting at Jesus' feet. You cannot pour from empty."],
            ["Philippians 1:9-10", "Love that grows in knowledge and discernment. That's the goal."],
          ].map(([ref, text]) => (
            <div key={ref} style={s.scriptureCard}>
              <div style={s.scriptureRef}>{ref}</div>
              <div style={s.scriptureText}>{text}</div>
            </div>
          ))}
        </div>

        {/* CLOSING */}
        <div style={s.closingBox}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle at 10% 80%, rgba(201,150,61,0.12) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgba(181,85,106,0.1) 0%, transparent 40%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={s.closingTitle}>Your Kingdom Lane</div>
            <div style={s.closingText}>
              Mercy sees the pain.
              <br />
              Faith believes God can heal it.
              <br />
              Giving offers what you have.
              <br />
              Service does the practical work.
              <br />
              Discernment senses what is really going on.
              <br />
              Hospitality creates the room where people feel safe enough to receive.
              <br />
              <br />
              You nourish people beyond the plate. Food is the doorway. The deeper ministry is
              comfort, safety, prayer, and the kindness of Christ flowing through you with wisdom.
              <br />
              <br />
              You are called to love people, not carry them.
              Jesus carries the world. You do not have to.
            </div>
            <div style={s.closingVerse}>
              "As each has received a gift, use it to serve one another,
              <br />
              as good stewards of God's varied grace." — 1 Peter 4:10
            </div>
            <div
              style={{
                marginTop: 20,
                fontSize: 12,
                color: "rgba(197,168,130,0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Prepared with love by RIZE Young Adult Ministry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
