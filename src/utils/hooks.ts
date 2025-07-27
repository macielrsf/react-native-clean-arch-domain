import { useState, useEffect, useCallback, useRef } from 'react';
import { debounce } from 'lodash';

/**
 * Hook personalizado para debounce usando lodash
 * @param value - Valor a ser debounced
 * @param delay - Delay em milissegundos
 * @returns Valor debounced
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

/**
 * Hook para gerenciar busca com debounce robusto usando lodash
 * @param initialValue - Valor inicial da busca
 * @param delay - Delay para debounce (padrão: 500ms)
 * @param minLength - Comprimento mínimo para ativar busca (padrão: 2)
 * @param onSearch - Callback chamado quando a busca deve ser executada
 */
export const useSearchWithDebounce = (
  initialValue: string = '',
  delay: number = 500,
  minLength: number = 2,
  onSearch?: (searchTerm: string) => void
) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [isTyping, setIsTyping] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(initialValue);
  
  // Ref para armazenar a função debounced
  const debouncedSearchRef = useRef<ReturnType<typeof debounce> | null>(null);

  // Cria a função debounced usando lodash
  useEffect(() => {
    debouncedSearchRef.current = debounce((searchValue: string) => {
      console.log('🔍 Executando busca para:', searchValue);
      setDebouncedSearchTerm(searchValue);
      setIsTyping(false);
      
      // Chama o callback de busca apenas se atender aos critérios
      if (searchValue.length >= minLength) {
        onSearch?.(searchValue);
      } else if (searchValue.length === 0) {
        // Se o campo estiver vazio, limpa a busca
        onSearch?.('');
      }
    }, delay);

    // Cleanup da função debounced
    return () => {
      if (debouncedSearchRef.current) {
        debouncedSearchRef.current.cancel();
      }
    };
  }, [delay, minLength, onSearch]);

  const handleSearchChange = useCallback((text: string) => {
    console.log('⌨️ Usuário digitou:', text);
    setSearchTerm(text);
    setIsTyping(true);
    
    // Cancela a busca anterior e agenda uma nova
    if (debouncedSearchRef.current) {
      debouncedSearchRef.current(text);
    }
  }, []);

  const handleSearchClear = useCallback(() => {
    console.log('🗑️ Limpando busca');
    setSearchTerm('');
    setDebouncedSearchTerm('');
    setIsTyping(false);
    
    // Cancela qualquer busca pendente
    if (debouncedSearchRef.current) {
      debouncedSearchRef.current.cancel();
    }
    
    // Limpa a busca imediatamente
    onSearch?.('');
  }, [onSearch]);

  // Determina se deve fazer a busca
  const shouldSearch = debouncedSearchTerm.length >= minLength;
  
  // Valor final para busca (vazio se não atender aos critérios)
  const finalSearchTerm = shouldSearch ? debouncedSearchTerm : '';

  return {
    searchTerm,           // Valor atual do input
    debouncedSearchTerm,  // Valor após debounce
    finalSearchTerm,      // Valor final para busca
    isTyping,            // Se o usuário está digitando
    shouldSearch,        // Se deve fazer a busca
    handleSearchChange,  // Função para mudar o valor
    handleSearchClear,   // Função para limpar
  };
}; 