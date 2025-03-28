import styled from '@emotion/styled';

const FieldContainer = styled.div`
  margin-bottom: var(--spacing-md);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  color: var(--text-primary);
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background: var(--bg-input);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-sm);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  background: var(--bg-input);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

interface FormFieldProps {
  label: string;
  name: string;
  type: 'text' | 'number' | 'select';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
}

export function FormField({ label, name, type, value, onChange, options, min, max }: FormFieldProps) {
  return (
    <FieldContainer>
      <Label htmlFor={name}>{label}</Label>
      {type === 'select' ? (
        <Select id={name} name={name} value={value} onChange={onChange}>
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      )}
    </FieldContainer>
  );
} 