import { createContext } from 'react';

export const EmailContext = createContext({ emails: [] });

export const ProductContext = createContext({ products: [] });

export const FeedContext = createContext({ feeds: [] });

export const AuthWizardContext = createContext({ user: {} });

export const ChatContext = createContext();

export const KanbanContext = createContext({
  KanbanColumns: [],
  kanbanTasks: []
});
