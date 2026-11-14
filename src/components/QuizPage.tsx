import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/src/data/tigers';
import { PageRoute } from '@/src/types/tiger';

interface QuizPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = QUIZ_QUESTIONS[currentIndex];
  const hasAnsweredCurrent = selectedOption !== null;
  const score = answers.reduce<number>(
    (acc, ans, idx) => (ans === QUIZ_QUESTIONS[idx].correctIndex ? acc + 1 : acc),
    0
  );

  const handleSelectOption = (optionIndex: number) => {
    if (hasAnsweredCurrent) return;
    setSelectedOption(optionIndex);
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(null));
    setIsFinished(false);
  };

  const getRank = (points: number) => {
    if (points >= 9) return 'Naturaliste Expert Panthera';
    if (points >= 7) return 'Biologiste de Terrain Confirmé';
    if (points >= 4) return 'Observateur Curieux';
    return 'Explorateur Débutant';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16 space-y-10">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]">
          Évaluation Scientifique Interactive
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#FAFAF9]">
          Quiz sur les Tigres du Monde
        </h1>
        <p className="text-base text-[#D4D4D8]">
          Dix questions vérifiées sur la zoologie, les sous-espèces vivantes et éteintes,
          l’anatomie et la conservation de Panthera tigris.
        </p>
      </div>

      {!isFinished ? (
        <div className="rounded-xl bg-[#121216] border border-white/10 p-6 sm:p-8 space-y-8">
          {/* Progress header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono text-[#D4AF37] tabular-nums">
                Question {currentIndex + 1} / {QUIZ_QUESTIONS.length}
              </span>
              <span className="font-mono text-[#A1A1AA] tabular-nums">
                Score actuel : {score}
              </span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-[#EA580C] transition-all duration-300"
                style={{
                  width: `${Math.round(((currentIndex + 1) / QUIZ_QUESTIONS.length) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Question */}
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAFAF9] leading-snug">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQuestion.correctIndex;

              let borderStyle = 'border-white/15 hover:border-[#D4AF37]/60 bg-[#09090B]';
              if (hasAnsweredCurrent) {
                if (isCorrect) {
                  borderStyle = 'border-emerald-500/80 bg-emerald-950/30';
                } else if (isSelected && !isCorrect) {
                  borderStyle = 'border-red-500/80 bg-red-950/30';
                } else {
                  borderStyle = 'border-white/10 bg-[#09090B] opacity-55';
                }
              }

              return (
                <button
                  key={option}
                  type="button"
                  disabled={hasAnsweredCurrent}
                  onClick={() => handleSelectOption(idx)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors flex items-center justify-between gap-4 min-h-[52px] ${borderStyle}`}
                >
                  <span className="text-sm sm:text-base text-[#FAFAF9]">{option}</span>
                  {hasAnsweredCurrent && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {hasAnsweredCurrent && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Instant Scientific Explanation */}
          {hasAnsweredCurrent && (
            <div className="p-5 rounded-lg bg-[#09090B] border border-white/15 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span
                  className={
                    selectedOption === currentQuestion.correctIndex
                      ? 'text-emerald-400 font-semibold'
                      : 'text-[#EA580C] font-semibold'
                  }
                >
                  {selectedOption === currentQuestion.correctIndex
                    ? 'Réponse exacte'
                    : 'Réponse incorrecte'}
                </span>
                <span className="text-[#A1A1AA]">Source : {currentQuestion.source}</span>
              </div>
              <p className="text-sm text-[#D4D4D8] leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-semibold transition-colors"
                >
                  <span>
                    {currentIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Question suivante'
                      : 'Voir le bilan final'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="rounded-xl bg-[#121216] border border-white/10 p-6 sm:p-10 space-y-8">
          <div className="text-center space-y-3 pb-6 border-b border-white/10">
            <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
              Résultat du Quiz
            </p>
            <div className="font-serif text-5xl sm:text-6xl font-semibold text-[#FAFAF9] tabular-nums">
              {score} / {QUIZ_QUESTIONS.length}
            </div>
            <p className="font-serif italic text-2xl text-[#EA580C]">{getRank(score)}</p>
          </div>

          {/* Review Summary */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-[#FAFAF9]">
              Récapitulatif des réponses
            </h3>
            <div className="divide-y divide-white/10">
              {QUIZ_QUESTIONS.map((q, i) => {
                const userAns = answers[i];
                const correct = userAns === q.correctIndex;
                return (
                  <div key={q.id} className="py-4 space-y-1.5">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-medium text-[#FAFAF9]">
                        {i + 1}. {q.question}
                      </p>
                      <span
                        className={`text-xs font-medium shrink-0 ${
                          correct ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {correct ? 'Exact' : 'Manqué'}
                      </span>
                    </div>
                    <p className="text-xs text-[#A1A1AA]">
                      Bonne réponse :{' '}
                      <span className="text-[#E8CA64]">{q.options[q.correctIndex]}</span> ·{' '}
                      {q.source}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#EA580C] hover:bg-[#F97316] text-white text-xs font-semibold transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recommencer le quiz</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('subspecies')}
              className="inline-flex items-center gap-2 text-sm text-[#D4AF37] hover:underline"
            >
              <span>Explorer le catalogue des sous-espèces</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
