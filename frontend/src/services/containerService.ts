
const API_URL = 'http://localhost:8080';

export interface Container {
  id: string;
  name: string;
}

export const getContainers = async (): Promise<Container[]> => {
  const response = await fetch(`${API_URL}/containers`);
  return response.json();
};

export const createContainer = async (config: any): Promise<string> => {
  const response = await fetch(`${API_URL}/containers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(config),
  });
  return response.text();
};

export const executeContainer = async (id: string): Promise<string> => {
  const response = await fetch(`${API_URL}/containers/${id}/execute`, {
    method: 'POST',
  });
  return response.text();
};
