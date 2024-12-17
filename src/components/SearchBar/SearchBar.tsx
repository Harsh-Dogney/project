import React from 'react';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/taskSlice';
import styles from './styles';

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Search className={styles.icon} size={20} />
      <input
        type="text"
        placeholder="Search tasks..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className={styles.input}
      />
    </div>
  );
};