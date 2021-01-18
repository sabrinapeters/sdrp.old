import { useAudio } from "react-use";
import {
  FiPauseCircle,
  FiPlayCircle,
  FiRotateCcw,
  FiRotateCw,
} from "react-icons/fi";

export interface IAudioProps {
  src: string;
}

export function AudioBox(props: IAudioProps) {
  const [audio, state, controls] = useAudio({
    src: props.src,
  });

  const percentage = (state.time / state.duration) * 100;

  return (
    <div className="block" aria-label="Audio Player" role="region">
      {audio}
      <div
        tabIndex={0}
        aria-valuetext="seek audio bar"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={Math.round(percentage)}
        role="slider"
      >
        <div className="AudioBarContainer">
          <svg
            className="AudioBoxBar bg-gray-100 text-purple-400 w-full mb-4 rounded-full"
            viewBox="0 0 100% 6"
            height={6}
            rx="3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0"
              width={percentage + "%"}
              fill="currentColor"
              height="6"
              rx="3"
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-around items-center font-mono uppercase">
        <button
          onClick={() => controls.seek(state.time - 30)}
          aria-label="Rewind 30 seconds"
          className="text-center"
        >
          <FiRotateCcw
            size={24}
            className="block mb-2 mx-auto"
            color="var(--fg)"
          />
          <span className="uppercase">-30 sec</span>
        </button>

        {state.paused ? (
          <button
            aria-controls="audio1"
            onClick={controls.play}
            aria-label="Play"
            className="PlayButton"
          >
            <FiPlayCircle size={64} color="var(--fg)" />
          </button>
        ) : (
          <button
            aria-controls="audio1"
            onClick={controls.pause}
            className="PlayButton"
          >
            <FiPauseCircle size={64} color="var(--fg)" />
          </button>
        )}
        <button
          onClick={() => controls.seek(state.time + 30)}
          aria-label="Advance 30 seconds"
          className="text-center"
        >
          <FiRotateCw
            size={24}
            className="block mb-2 mx-auto"
            color="var(--fg)"
          />
          <span className="uppercase">+30 sec</span>
        </button>
      </div>
    </div>
  );
}
