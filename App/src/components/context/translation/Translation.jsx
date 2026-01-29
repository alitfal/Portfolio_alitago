import React, { createContext, useContext, useState, useEffect } from "react";

const TranslationContext = createContext();
const useTranslation = () => useContext(TranslationContext);

// Idiomas soportados por tus JSON en /translations
const SUPPORTED_LANGS = ["en", "es"];
const DEFAULT_LANG = "es";

function normalizeLang(lang) {
  // "es-ES" -> "es", "en-US" -> "en"
  const base = (lang || "").toLowerCase().split("-")[0];
  return SUPPORTED_LANGS.includes(base) ? base : DEFAULT_LANG;
}

function detectClientLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const nav = window.navigator;
  const candidates =
    Array.isArray(nav.languages) && nav.languages.length
      ? nav.languages
      : [nav.language];

  for (const c of candidates) {
    const normalized = normalizeLang(c);
    if (SUPPORTED_LANGS.includes(normalized)) return normalized;
  }
  return DEFAULT_LANG;
}

const TranslationProvider = ({ children }) => {
  // Inicializa con idioma del cliente, pero luego el efecto de localStorage lo puede sobrescribir
  const [language, setLanguage] = useState(() => detectClientLanguage());
  const [translations, setTranslations] = useState({});

  // 1) Si hay idioma guardado, manda sobre el del cliente
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(normalizeLang(savedLanguage));
    }
  }, []);

  // 2) Carga traducciones + persiste idioma
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
    }

    let cancelled = false;

    const loadTranslations = async () => {
      try {
        const translationData = await import(`@/translations/${language}.json`);
        if (!cancelled) setTranslations(translationData.default);
      } catch (e) {
        // Fallback por si no existe el JSON del idioma detectado
        const fallback = await import(`@/translations/${DEFAULT_LANG}.json`);
        if (!cancelled) setTranslations(fallback.default);
      }
    };

    loadTranslations();

    return () => {
      cancelled = true;
    };
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "es" : "en";
    setLanguage(newLanguage);
  };

  const t = (key) => {
    const keys = key.split(".");
    let translation = translations;

    for (const k of keys) {
      translation = translation?.[k];
      if (translation == null) return key;
    }
    return translation;
  };

  return (
    <TranslationContext.Provider
      value={{ t, toggleLanguage, language, setLanguage }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export { useTranslation, TranslationProvider };
