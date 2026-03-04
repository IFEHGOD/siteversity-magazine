import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import MainLayout from "@/layouts/MainLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import Home from "@/pages/Home";
import ArticleDetails from "@/pages/ArticleDetails";
import CategoryPage from "@/pages/CategoryPage";
import AuthorProfile from "@/pages/AuthorProfile";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import WriteForUs from "@/pages/WriteForUs";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import SearchResults from "@/pages/SearchResults";
import NotFound from "@/pages/NotFound";

import DashboardOverview from "@/pages/dashboard/DashboardOverview";
import MyArticles from "@/pages/dashboard/MyArticles";
import CreateArticle from "@/pages/dashboard/CreateArticle";
import Drafts from "@/pages/dashboard/Drafts";
import Analytics from "@/pages/dashboard/Analytics";
import Comments from "@/pages/dashboard/Comments";
import ProfileSettings from "@/pages/dashboard/ProfileSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/article/:slug" element={<ArticleDetails />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/author/:id" element={<AuthorProfile />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/write-for-us" element={<WriteForUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/search" element={<SearchResults />} />
            </Route>

            {/* Dashboard (protected) */}
            <Route path="/dashboard" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<DashboardOverview />} />
              <Route path="articles" element={<MyArticles />} />
              <Route path="create" element={<CreateArticle />} />
              <Route path="drafts" element={<Drafts />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="comments" element={<Comments />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="*" element={<MainLayout />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
