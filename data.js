const marketData = {

  marketSentiment: "やや弱気", 

  usdJpy: "163.88円",

  sp500Change: "+0.88%",
  nasdaqChange: "+1.77%",
  dowChange: "+0.55%",  

 importantEvent: "22:30 FOMC",
importantEventComment: "市場が大きく動く可能性があります。",

  aiCommentTitle: "今日は様子見",
aiCommentText: "市場心理は弱気ですが、<br>重要イベントを控えています。<br><br>焦って飛びつかず、<br>押し目を待つ戦略も有効です。",

premiumAiAnalysis: "米国市場はやや強気。主要指数が堅調で、AI・ハイテク関連に資金が向かっています。重要イベントを控えているため、短期的には押し目に注意したい局面です。",  
  
  topSector: "金融",
topSectorName: "NASDAQ100",
topSectorChange: "+1.12%",
topSectorComment: "大型ハイテク株が堅調です。",

　　　　　bottomSector: "　銀行",
bottomSectorName: "銀行指数",
bottomSectorChange: "-0.88%",
bottomSectorComment: "金利低下を受けて売られています。",
  
  sectorRanking: [
    "金融",
    "ソフトウェア",
    "AI関連"
  ],

stockDetails: [
  {
    name: "Microsoft",
    reason: "大型株の中で堅調",
    change: "+0.8%",
    recentTrend: "直近数日も堅調",
    volume: "増加",
    volumeChange: "+18%",
    weekPosition: "52週高値圏",
    risk: "決算発表に注意"
  },

  {
    name: "NVIDIA",
    reason: "半導体への資金流入・出来高増加",
    change: "+1.7%",
    recentTrend: "上昇基調",
    volume: "大幅増加",
    volumeChange: "+32%",
    weekPosition: "52週高値圏",
    risk: "半導体全体の反落"
  },

  {
    name: "Amazon",
    reason: "直近の値動きが堅調",
    change: "+1.1%",
    recentTrend: "緩やかな上昇",
    volume: "増加",
    volumeChange: "+12%",
    weekPosition: "52週高値からやや下",
    risk: "大型株全体の調整"
  },

  {
    name: "Meta",
    reason: "出来高を伴って上昇",
    change: "+1.4%",
    recentTrend: "上昇基調",
    volume: "増加",
    volumeChange: "+24%",
    weekPosition: "52週高値圏",
    risk: "短期的な過熱"
  },

  {
    name: "Broadcom",
    reason: "半導体セクター上昇＋直近の勢い",
    change: "+2.0%",
    recentTrend: "強い上昇",
    volume: "大幅増加",
    volumeChange: "+35%",
    weekPosition: "52週高値圏",
    risk: "半導体セクターの反落"
  }
],  

stocks: [
  "Microsoft",
  "NVIDIA",
  "Amazon",
  "Meta",
  "Broadcom"
],

stockReasons: [
  "大型株の中で堅調",
  "半導体への資金流入・出来高増加",
  "直近の値動きが堅調",
  "出来高を伴って上昇",
  "半導体セクター上昇＋直近の勢い"
],  

  aiComment: {
    market: "市場心理は強気ですが、重要イベント前のため値動きには注意。",
    focus: "半導体・AI関連への資金流入が継続。",
    strategy: "押し目を待ちながら、強いセクターを中心に監視。"
  }

};

function createAIInput() {

  return {
    market: {
      sentiment: marketData.marketSentiment,
      usdJpy: marketData.usdJpy,
      sp500: marketData.sp500Change,
      nasdaq: marketData.nasdaqChange,
      dow: marketData.dowChange
    },

    event: {
      name: marketData.importantEvent,
      comment: marketData.importantEventComment
    },

    sectors: marketData.sectorRanking,

    stocks: marketData.stockDetails
  };

}

const aiPrompt = `
あなたは「朝株AI US」の米国株分析AIです。

あなたの目的は、株価の上昇を予言することではありません。

市場全体を分析し、
「今日、投資家が注目しておく価値が高い銘柄」
を5銘柄に絞り込むことです。

注目度が高いことと、その銘柄が必ず上昇することは同じではありません。

以下の順番で分析してください。

① 市場環境
前日の主要指数の値動き、市場心理、ドル円、
重要イベントなどから、現在の米国市場の環境を判断する。

② 強いセクター
市場環境と前日の値動きを考慮し、
資金が向かっているセクターを確認する。

③ 有力銘柄
強いセクターの中から、
市場テーマとの関連性や企業としての注目度が高い銘柄を確認する。

④ 値動き・出来高
前日の騰落率、
直近数日の値動き、
出来高、
出来高の増減、
52週高値・安値との位置を確認する。

⑤ イベント・リスク
決算発表、FOMC、CPI、雇用統計、GDPなどの重要経済指標、
製品発表、設備投資など、
株価に影響するイベントやリスクを確認する。

⑥ 総合評価
①〜⑤を総合的に判断し、
今日注目しておく価値が高い銘柄を5銘柄選ぶ。

単純に前日上昇率が高い銘柄を上位にしないこと。

市場テーマ、セクター、値動き、出来高、イベント、リスクを総合的に判断すること。

最終的な出力は、
「銘柄名」と「短い注目理由」を中心に、
ユーザーが朝に短時間で理解できる形にすること。

長い説明や断定的な表現は避けること。

「必ず上がる」「買うべき」などの断定はしないこと。

以下が本日の市場データです。

${JSON.stringify(createAIInput(), null, 2)}
`;
