//! bad way
// export type TranslateProps = {
//   arg:
//     | "error_fa"
//     | "error_en"
//     | "error_es"
//     | "error_tr"
//     | "res_fa"
//     | "res_en"
//     | "res_es"
//     | "res_tr"
//     | "notif_fa"
//     | "notif_en"
//     | "notif_es"
//     | "notif_tr";
// };

//! good way
type messagesTypes = "error" | "res" | "notif";
type languages = "fa" | "en" | "es" | "tr";

export type TranslateProps = {
  arg: `${messagesTypes}_${languages}`;
};
