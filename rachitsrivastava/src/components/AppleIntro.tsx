import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const initialProps = {
  pathLength: 0,
  opacity: 0,
} as const;

const animateProps = {
  pathLength: 1,
  opacity: 1,
} as const;

type EffectProps = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

// 1. Apple English "hello" (from reference repository / Apple official vector)
export function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: EffectProps) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[85vw] overflow-visible", className)}
      exit={{ opacity: 0 }}
      fill="none"
      initial={{ opacity: 1 }}
      stroke="currentColor"
      strokeWidth="14.8883"
      transition={{ duration: 0.5 }}
      viewBox="0 0 638 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="hello"
      {...props}
    >
      <title>hello</title>
      <motion.path
        animate={animateProps}
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        initial={initialProps}
        style={{ strokeLinecap: "round" }}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />
      <motion.path
        animate={animateProps}
        d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
        initial={initialProps}
        onAnimationComplete={onAnimationComplete}
        style={{ strokeLinecap: "round" }}
        transition={{
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
      />
    </motion.svg>
  );
}

// 2. Apple Hindi "नमस्ते" (Namaste - official Apple vector design)
export function AppleHelloHindiEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: EffectProps) {
  const calc = (x: number) => x * speed;

  const hiPaths = [
    // न loop
    { d: "M148,413 C191.9613037109375,399.0122985839844 221,363.4808044433594 221,310 C221,252 180,207 125,207 C74,207 37,243 37,296 C37,371.625 103.00070190429688,420 205,417 C307.9993896484375,414 395.1940002441406,357.94769287109375 462.27020263671875,271.68231201171875", dur: 0.35, delay: 0 },
    // न stem
    { d: "M515.2055053710938,640.3654174804688 C478.7607116699219,397.39300537109375 449.9226989746094,172.48890686035156 427.38238525390625,-50.3916015625", dur: 0.25, delay: 0.3 },
    // म loop
    { d: "M849.9161987304688,651.1098022460938 C852.17578125,542.0632934570312 850.93701171875,462.6221008300781 843.1148071289062,372.4389953613281 C831.5830078125,239.4864044189453 783.6737060546875,158.65420532226562 706.3648681640625,158.65420532226562 C659.4534912109375,158.65420532226562 625.3939208984375,190.0135040283203 625.3939208984375,238.11180114746094 C625.3939208984375,303.3052978515625 686.0765991210938,355.46148681640625 797.9151611328125,351.043701171875 C903.5411376953125,346.8713073730469 1011.497802734375,312.81109619140625 1086.0015869140625,243.64889526367188", dur: 0.45, delay: 0.5 },
    // म stem
    { d: "M1143.8330078125,654.775390625 C1106.62158203125,412.3577880859375 1076.0614013671875,180.14309692382812 1054.73046875,-42.3916015625", dur: 0.25, delay: 0.9 },
    // स् body
    { d: "M1484.206298828125,654.72998046875 C1568.29833984375,606.2442016601562 1621.8236083984375,499.24371337890625 1621.8236083984375,396.5723876953125 C1621.8236083984375,271.39068603515625 1538.67236328125,189 1421.8236083984375,189 C1308.0948486328125,189 1231.1029052734375,267.7770080566406 1256.8236083984375,331 C1278.3321533203125,383.86920166015625 1352.943115234375,385.5563049316406 1412.8236083984375,337 C1487.125,276.75 1516.8270263671875,143.9499969482422 1528.8236083984375,-35", dur: 0.35, delay: 1.1 },
    // स् connector
    { d: "M1603.191650390625,301.98583984375 C1662.073974609375,278.72955322265625 1747.0185546875,274.7247314453125 1824.642578125,292.89703369140625", dur: 0.2, delay: 1.4 },
    // त stem
    { d: "M2221.82373046875,662.3325805664062 C2180.82373046875,414.54559326171875 2146.82373046875,183.26089477539062 2120.82373046875,-42", dur: 0.25, delay: 1.55 },
    // त arch
    { d: "M2140.86181640625,120.98700714111328 C2161.3857421875,278.66741943359375 2107.806396484375,403 1977.8236083984375,403 C1880.8236083984375,403 1805.8236083984375,312 1805.8236083984375,199 C1805.8236083984375,117 1835.8236083984375,27 1891.8236083984375,-36", dur: 0.3, delay: 1.75 },
    // े matra
    { d: "M2077.867919921875,834.4241333007812 C1934.2354736328125,844.1658325195312 1890.8643798828125,886.9712524414062 1890.8643798828125,930.74462890625 C1890.8643798828125,965.7967529296875 1922.5157470703125,989.1245727539062 1966.02099609375,987.4231567382812 C2065.895751953125,983.7774658203125 2165.322998046875,875.1155395507812 2216.171875,733.6319580078125", dur: 0.25, delay: 2.0 },
    // शिरोरेखा (Shirorekha headline)
    { d: "M7.1930999755859375,660.1329956054688 C101.7603988647461,659.36181640625 215,658 361.5357360839844,658 C509.86846923828125,658 816.0955810546875,657.80419921875 999.2918090820312,658.0155029296875 C1166.410888671875,658.2083129882812 1575.82421875,658.7503051757812 1801.909912109375,658.74609375 C2017.107666015625,658.7421264648438 2205.16455078125,661.0795288085938 2382.82373046875,665.75732421875", dur: 0.45, delay: 2.2 },
  ];

  return (
    <motion.svg
      className={cn("h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[85vw] overflow-visible", className)}
      exit={{ opacity: 0 }}
      fill="none"
      initial={{ opacity: 1 }}
      stroke="currentColor"
      strokeWidth="60"
      transition={{ duration: 0.5 }}
      viewBox="7.1930999755859375 -50.3916015625 2375.630630493164 1039.5161743164062"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="namaste"
      {...props}
    >
      <title>नमस्ते</title>
      <g transform="scale(1, -1) translate(0, -938.7329711914062)">
        {hiPaths.map((item, idx) => (
          <motion.path
            key={idx}
            animate={animateProps}
            d={item.d}
            initial={initialProps}
            style={{ strokeLinecap: "round" }}
            onAnimationComplete={idx === hiPaths.length - 1 ? onAnimationComplete : undefined}
            transition={{
              duration: calc(item.dur),
              ease: "easeInOut",
              delay: calc(item.delay),
              opacity: { duration: calc(item.dur * 0.5), delay: calc(item.delay) },
            }}
          />
        ))}
      </g>
    </motion.svg>
  );
}

// 3. Apple Spanish "hola" (official Apple vector design)
export function AppleHelloSpanishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: EffectProps) {
  const calc = (x: number) => x * speed;

  const esPaths = [
    // h stem
    { d: "M-87.4115982055664,84.49829864501953 C23.391000747680664,149.7259063720703 119.25160217285156,231.5644073486328 226.2100067138672,376.3699951171875 C301.2781066894531,478.00079345703125 337.9945068359375,569.3778076171875 340,642.1939697265625 C341,696.1920166015625 315,737.156005859375 266,737.156005859375 C212,737.156005859375 178,696.1920166015625 157,602.1610107421875 C134,498.82000732421875 117,380.239990234375 74,0", dur: 0.7, delay: 0 },
    // h arch
    { d: "M78.21453094482422,37.160953521728516 C99.42868041992188,223.645263671875 184,372 291,372 C355,372 395.6745910644531,321 384.1253967285156,248 C377.6238098144531,205 365.8778076171875,155 359.16668701171875,106 C351.0015869140625,44 374.3254089355469,-4 446.4375915527344,-4 C548.2224731445312,-4 612.3004760742188,94.82870483398438 640.0266723632812,211.85372924804688", dur: 0.45, delay: 0.65 },
    // o & l
    { d: "M823,387 C722.969482421875,378.9136047363281 648.1378173828125,294.13189697265625 634,178 C621,72 680,-8 774,-8 C888,-8 962,90 967,212 C971,329 915,388 839,388 C779,388 747,343 749,288 C750.9533081054688,212.79859924316406 807.3482666015625,128.36459350585938 925.671142578125,117.57537841796875 C1089.7955322265625,102.60975646972656 1314.263427734375,223.95193481445312 1404.895751953125,462.5155029296875 C1431.037353515625,531.3258056640625 1441,596.2349243164062 1441,641.593994140625 C1441,695.3764038085938 1424,736.673583984375 1376,736.673583984375 C1329,736.673583984375 1298,700.1784057617188 1270,642.5543823242188 C1237.1939697265625,575.7216186523438 1212.927734375,479.32598876953125 1203,370.3599853515625 C1178,96.94000244140625 1234,-4 1353.8040771484375,-4 C1475.2161865234375,-4 1555.5,101.23589324951172 1590.21826171875,222.95718383789062", dur: 1.1, delay: 1.05 },
    // a loop
    { d: "M1905.600341796875,312.42718505859375 C1885.99609375,357.5426940917969 1844.325439453125,388 1777.994140625,388 C1667.994140625,388 1585.3248291015625,278 1579.8975830078125,160 C1575.167724609375,52 1625.00244140625,-8.710000038146973 1695.984375,-8 C1796.735595703125,-6.992199897766113 1870.7939453125,91.9677963256836 1903.852294921875,301.3554992675781 C1907.930908203125,327.1893615722656 1912.15771484375,354.1661376953125 1916.236328125,380", dur: 0.45, delay: 2.1 },
    // a stem
    { d: "M1916.236328125,380 C1912.107177734375,353.7950439453125 1907.97802734375,327.5900573730469 1903.8487548828125,301.3851013183594 C1885.788818359375,186.7725067138672 1877.4560546875,141.55520629882812 1878.35107421875,112 C1880.440185546875,43 1905.25439453125,-4 1967.25439453125,-4 C2045.25439453125,-4 2089,49 2110,107", dur: 0.35, delay: 2.5 },
  ];

  return (
    <motion.svg
      className={cn("h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[85vw] overflow-visible", className)}
      exit={{ opacity: 0 }}
      fill="none"
      initial={{ opacity: 1 }}
      stroke="currentColor"
      strokeWidth="60"
      transition={{ duration: 0.5 }}
      viewBox="-87.4115982055664 -8.710000038146973 2197.4115982055664 745.866005897522"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="hola"
      {...props}
    >
      <title>hola</title>
      <g transform="scale(1, -1) translate(0, -728.446005821228)">
        {esPaths.map((item, idx) => (
          <motion.path
            key={idx}
            animate={animateProps}
            d={item.d}
            initial={initialProps}
            style={{ strokeLinecap: "round" }}
            onAnimationComplete={idx === esPaths.length - 1 ? onAnimationComplete : undefined}
            transition={{
              duration: calc(item.dur),
              ease: "easeInOut",
              delay: calc(item.delay),
              opacity: { duration: calc(item.dur * 0.5), delay: calc(item.delay) },
            }}
          />
        ))}
      </g>
    </motion.svg>
  );
}

const AppleIntro: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showIntro, setShowIntro] = useState(true);

  // Lock body scroll while intro animation plays
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (!showIntro) {
      document.body.style.overflow = '';
    }
  }, [showIntro]);

  const handleDismiss = useCallback(() => {
    setShowIntro(false);
  }, []);

  // Keyboard shortcut to dismiss (Escape, Space, Enter)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleDismiss]);

  const handleStepComplete = (stepIndex: number) => {
    setTimeout(() => {
      if (stepIndex < 2) {
        setCurrentStep((prev) => prev + 1);
      } else {
        // Last greeting (hola) finished
        handleDismiss();
      }
    }, stepIndex === 2 ? 500 : 380);
  };

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="apple-intro-overlay"
          className="fixed inset-0 z-[999999] flex items-center justify-center select-none cursor-pointer"
          style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          onClick={handleDismiss}
        >
          <div className="relative flex items-center justify-center p-6">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="hello"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  <AppleHelloEnglishEffect
                    className="text-white"
                    onAnimationComplete={() => handleStepComplete(0)}
                  />
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="namaste"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  <AppleHelloHindiEffect
                    className="text-white"
                    onAnimationComplete={() => handleStepComplete(1)}
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="hola"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center justify-center"
                >
                  <AppleHelloSpanishEffect
                    className="text-white"
                    onAnimationComplete={() => handleStepComplete(2)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppleIntro;
