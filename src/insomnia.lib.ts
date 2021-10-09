import { Readable } from "stream";

interface RequestContext {
  getId(): string;
  getName(): string;
  getUrl(): string;
  setUrl(url: string): void;
  getMethod(): string;
  setMethod(method: string): void;
  getHeaders(): Array<{ name: string; value: string }>;
  getHeader(name: string): string | null;
  hasHeader(name: string): boolean;
  removeHeader(name: string): void;
  setHeader(name: string, value: string): void;
  addHeader(name: string, value: string): void;
  getParameter(name: string): string | null;
  getParameters(): Array<{ name: string; value: string }>;
  setParameter(name: string, value: string): void;
  hasParameter(name: string): boolean;
  addParameter(name: string, value: string): void;
  removeParameter(name: string): void;
  getBody(): Record<string, unknown>;
  setBody(body: Record<string, unknown>): void;
  getEnvironmentVariable(name: string): number | string | boolean | Record<string, unknown> | null | undefined;
  getEnvironment(): Record<string, unknown>;
  setAuthenticationParameter(name: string, value: string): void;
  getAuthentication(): Record<string, unknown>;
  getCookie(name: string): string | null;
  setCookie(name: string, value: string): void;
  settingSendCookies(enabled: boolean): void;
  settingStoreCookies(enabled: boolean): void;
  settingEncodeUrl(enabled: boolean): void;
  settingDisableRenderRequestBody(enabled: boolean): void;
  settingFollowRedirects(enabled: boolean): void;
}

interface ResponseContext {
  getRequestId(): string;
  getStatusCode(): number;
  getStatusMessage(): string;
  getBytesRead(): number;
  getTime(): number;
  getBody(): Buffer | null;
  getBodyStream(): Readable;
  setBody(body: Buffer): void;
  getHeader(name: string): string | Array<string> | null;
  getHeaders(): Array<{ name: string; value: string }> | undefined;
  hasHeader(name: string): boolean;
}

interface StoreContext {
  hasItem(key: string): Promise<boolean>;
  setItem(key: string, value: string): Promise<void>;
  getItem(key: string): Promise<string | null>;
  removeItem(key: string): Promise<void>;
  clear(): Promise<void>;
  all(): Promise<Array<{ key: string; value: string }>>;
}

interface AppContext {
  alert(title: string, message?: string): Promise<void>;

  dialog(
    title: string,
    body: HTMLElement,
    options?: {
      onHide?: () => void;
      tall?: boolean;
      skinny?: boolean;
      wide?: boolean;
    }
  ): void;

  prompt(
    title: string,
    options?: {
      label?: string;
      defaultValue?: string;
      submitName?: string;
      cancelable?: boolean;
    }
  ): Promise<string>;

  getPath(name: string): string;

  showSaveDialog(options?: { defaultPath?: string }): Promise<string | null>;
}

interface ImportOptions {
  workspaceId?: string;
  workspaceScope?: "design" | "collection";
}

interface DataContext {
  import: {
    uri(uri: string, options?: ImportOptions): Promise<void>;
    raw(text: string, options?: ImportOptions): Promise<void>;
  };
  export: {
    insomnia(options?: {
      includePrivate?: boolean;
      format?: "json" | "yaml";
    }): Promise<string>;
    har(options?: { includePrivate?: boolean }): Promise<string>;
  };
}

interface NetworkContext {
  sendRequest(request: Request): Promise<Response>;
}

export interface Context {
  request: RequestContext;
  response: ResponseContext;
  store: StoreContext;
  app: AppContext;
  data: DataContext;
  network: NetworkContext;
}

export interface TemplateTag {
  name: string;
  displayName: string;
  disablePreview?: () => boolean;
  description?: string;
  deprecated?: boolean;
  args: Array<{
    displayName: string;
    description?: string;
    // defaultValue: string | number | boolean;
    type: "string" | "number" | "enum" | "model" | "boolean";

    // Only type === 'string'
    placeholder?: string;

    // Only type === 'model'
    // modelType: string,

    help?: string;

    // Only type === 'enum'
    options: Array<{
      displayName: string;
      value: string;
      description?: string;
      placeholder?: string;
    }>;
  }>;
  run?: (context: Context, selection: string) => number | string | boolean | Record<string, unknown> | null | undefined;
  // actions: Array<{
  //   name: string,
  //   icon?: string,
  // }>,
}
