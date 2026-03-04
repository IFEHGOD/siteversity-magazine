import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TiptapLink from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, ImagePlus, Link as LinkIcon, Minus, X
} from 'lucide-react';
import { categories } from '@/data/mockData';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [coverPreview, setCoverPreview] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TiptapLink.configure({ openOnClick: false }),
      Image,
      Placeholder.configure({ placeholder: 'Start writing your story...' }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'outline-none min-h-[400px]',
      },
    },
  });

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleCoverUpload = () => {
    setCoverPreview('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop');
    toast.success('Cover image uploaded');
  };

  const addImage = () => {
    const url = prompt('Enter image URL:');
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = prompt('Enter link URL:');
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const handlePublish = () => {
    toast.success('Article published successfully!');
  };

  const handleSaveDraft = () => {
    toast.success('Draft saved!');
  };

  if (!editor) return null;

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-serif text-3xl font-bold">Create Article</h1>
        <div className="flex gap-3">
          <button onClick={handleSaveDraft} className="px-5 py-2.5 border border-border text-sm font-medium rounded-lg hover:bg-secondary transition-colors">
            Save Draft
          </button>
          <button onClick={handlePublish} className="px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Publish
          </button>
        </div>
      </div>

      {/* Cover image */}
      <div className="mb-6">
        {coverPreview ? (
          <div className="relative rounded-xl overflow-hidden">
            <img src={coverPreview} alt="Cover" className="w-full h-56 object-cover" />
            <button
              onClick={() => setCoverPreview('')}
              className="absolute top-3 right-3 p-1.5 bg-background/80 rounded-full hover:bg-background transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={handleCoverUpload}
            className="w-full h-40 border-2 border-dashed border-border rounded-xl flex items-center justify-center text-muted-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <div className="text-center">
              <ImagePlus className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm font-medium">Add Cover Image</p>
            </div>
          </button>
        )}
      </div>

      {/* Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article title..."
        className="w-full text-3xl font-serif font-bold bg-transparent border-0 focus:outline-none placeholder:text-muted-foreground/40 mb-4"
      />

      {/* Category & Tags */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.slug}>{cat.name}</option>
          ))}
        </select>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
            placeholder="Add tags..."
            className="px-3 py-2 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent w-32"
          />
          <button onClick={addTag} className="text-sm text-accent font-medium hover:underline">Add</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
              {tag}
              <button onClick={() => removeTag(tag)}><X className="w-3 h-3" /></button>
            </span>
          ))}
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2 bg-secondary/50 rounded-t-xl border border-border border-b-0">
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')}><Bold className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')}><Italic className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')}><UnderlineIcon className="w-4 h-4" /></ToolbarBtn>
        <div className="w-px bg-border mx-1" />
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })}><Heading1 className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })}><Heading2 className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })}><Heading3 className="w-4 h-4" /></ToolbarBtn>
        <div className="w-px bg-border mx-1" />
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')}><List className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')}><ListOrdered className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')}><Quote className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')}><Code className="w-4 h-4" /></ToolbarBtn>
        <div className="w-px bg-border mx-1" />
        <ToolbarBtn onClick={addImage}><ImagePlus className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={addLink} active={editor.isActive('link')}><LinkIcon className="w-4 h-4" /></ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()}><Minus className="w-4 h-4" /></ToolbarBtn>
      </div>

      {/* Editor */}
      <div className="tiptap-editor border border-border rounded-b-xl bg-card min-h-[400px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

function ToolbarBtn({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${active ? 'bg-accent/20 text-accent' : 'text-muted-foreground hover:bg-secondary hover:text-foreground'}`}
    >
      {children}
    </button>
  );
}
