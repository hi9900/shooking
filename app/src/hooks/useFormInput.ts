import { useState, type ChangeEvent } from 'react';

/**
 * 폼 입력을 관리하는 커스텀 훅
 * @param {string} initialValue - 입력 필드의 초기값
 * @param {(value: string) => string} [formatter] - 입력값을 포맷팅하는 함수 (선택)
 * @returns {[string, (e: ChangeEvent<HTMLInputElement>) => void, React.Dispatch<SetStateAction<string>>]} [value, onChange, setValue]
 * 반환되는 튜플(배열)은 다음을 포함합니다:
 * - `value` (string): 현재 입력값
 * - `onChange` (function): input의 onChange 이벤트에 바인딩할 핸들러
 * - `setValue` (function): 값을 직접 설정할 수 있는 setter
 */
export function useFormInput(
  initialValue: string,
  formatter?: (value: string) => string,
): [
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
] {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    // 포맷터가 있으면 포맷팅된 값을, 없으면 새 값을 그대로 설정
    setValue(formatter ? formatter(newValue) : newValue);
  };

  return [value, handleChange, setValue];
}
