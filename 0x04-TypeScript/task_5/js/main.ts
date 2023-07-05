interface MajorCredits {
  brand: string;
  credits: number;
}

interface MinorCredits {
  brand: string;
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const sum = subject1.credits + subject2.credits;
  return {
    brand: subject1.brand,
    credits: sum,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const sum = subject1.credits + subject2.credits;
  return {
    brand: subject1.brand,
    credits: sum,
  };
}

