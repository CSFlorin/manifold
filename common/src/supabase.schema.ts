export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contract_answers: {
        Row: {
          answer_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Insert: {
          answer_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Update: {
          answer_id?: string
          contract_id?: string
          data?: Json
          fs_updated_time?: string
        }
      }
      contract_bets: {
        Row: {
          bet_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Insert: {
          bet_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Update: {
          bet_id?: string
          contract_id?: string
          data?: Json
          fs_updated_time?: string
        }
      }
      contract_comments: {
        Row: {
          comment_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Insert: {
          comment_id: string
          contract_id: string
          data: Json
          fs_updated_time: string
        }
        Update: {
          comment_id?: string
          contract_id?: string
          data?: Json
          fs_updated_time?: string
        }
      }
      contract_embeddings: {
        Row: {
          contract_id: string
          created_at: string | null
          embeddings: number[]
        }
        Insert: {
          contract_id: string
          created_at?: string | null
          embeddings: number[]
        }
        Update: {
          contract_id?: string
          created_at?: string | null
          embeddings?: number[]
        }
      }
      contract_follows: {
        Row: {
          contract_id: string
          data: Json
          follow_id: string
          fs_updated_time: string
        }
        Insert: {
          contract_id: string
          data: Json
          follow_id: string
          fs_updated_time: string
        }
        Update: {
          contract_id?: string
          data?: Json
          follow_id?: string
          fs_updated_time?: string
        }
      }
      contract_liquidity: {
        Row: {
          contract_id: string
          data: Json
          fs_updated_time: string
          liquidity_id: string
        }
        Insert: {
          contract_id: string
          data: Json
          fs_updated_time: string
          liquidity_id: string
        }
        Update: {
          contract_id?: string
          data?: Json
          fs_updated_time?: string
          liquidity_id?: string
        }
      }
      contract_recommendation_features: {
        Row: {
          contract_id: string
          f0: number
          f1: number
          f2: number
          f3: number
          f4: number
          freshness_score: number | null
        }
        Insert: {
          contract_id: string
          f0: number
          f1: number
          f2: number
          f3: number
          f4: number
          freshness_score?: number | null
        }
        Update: {
          contract_id?: string
          f0?: number
          f1?: number
          f2?: number
          f3?: number
          f4?: number
          freshness_score?: number | null
        }
      }
      contracts: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      discord_messages_markets: {
        Row: {
          channel_id: string
          last_updated_thread_time: number | null
          market_id: string
          market_slug: string
          message_id: string
          thread_id: string | null
        }
        Insert: {
          channel_id: string
          last_updated_thread_time?: number | null
          market_id: string
          market_slug: string
          message_id: string
          thread_id?: string | null
        }
        Update: {
          channel_id?: string
          last_updated_thread_time?: number | null
          market_id?: string
          market_slug?: string
          message_id?: string
          thread_id?: string | null
        }
      }
      discord_users: {
        Row: {
          api_key: string
          discord_user_id: string
        }
        Insert: {
          api_key: string
          discord_user_id: string
        }
        Update: {
          api_key?: string
          discord_user_id?: string
        }
      }
      group_contracts: {
        Row: {
          contract_id: string
          data: Json
          fs_updated_time: string
          group_id: string
        }
        Insert: {
          contract_id: string
          data: Json
          fs_updated_time: string
          group_id: string
        }
        Update: {
          contract_id?: string
          data?: Json
          fs_updated_time?: string
          group_id?: string
        }
      }
      group_members: {
        Row: {
          data: Json
          fs_updated_time: string
          group_id: string
          member_id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          group_id: string
          member_id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          group_id?: string
          member_id?: string
        }
      }
      groups: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      incoming_writes: {
        Row: {
          data: Json | null
          doc_id: string
          event_id: string | null
          id: number
          parent_id: string | null
          table_id: string
          ts: string
          write_kind: string
        }
        Insert: {
          data?: Json | null
          doc_id: string
          event_id?: string | null
          id?: never
          parent_id?: string | null
          table_id: string
          ts: string
          write_kind: string
        }
        Update: {
          data?: Json | null
          doc_id?: string
          event_id?: string | null
          id?: never
          parent_id?: string | null
          table_id?: string
          ts?: string
          write_kind?: string
        }
      }
      manalinks: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      posts: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      test: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      test_contracts: {
        Row: {
          created_at: string | null
          id: number
          question: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          question?: string
        }
        Update: {
          created_at?: string | null
          id?: number
          question?: string
        }
      }
      test_user_contracts: {
        Row: {
          contract_id: number
          created_at: string | null
          liked: boolean | null
          user_id: number
        }
        Insert: {
          contract_id: number
          created_at?: string | null
          liked?: boolean | null
          user_id: number
        }
        Update: {
          contract_id?: number
          created_at?: string | null
          liked?: boolean | null
          user_id?: number
        }
      }
      test_users: {
        Row: {
          created_at: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string | null
        }
      }
      tombstones: {
        Row: {
          doc_id: string
          fs_deleted_at: string
          id: number
          parent_id: string | null
          table_id: string
        }
        Insert: {
          doc_id: string
          fs_deleted_at: string
          id?: never
          parent_id?: string | null
          table_id: string
        }
        Update: {
          doc_id?: string
          fs_deleted_at?: string
          id?: never
          parent_id?: string | null
          table_id?: string
        }
      }
      txns: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
      user_contract_metrics: {
        Row: {
          contract_id: string
          data: Json
          fs_updated_time: string
          user_id: string
        }
        Insert: {
          contract_id: string
          data: Json
          fs_updated_time: string
          user_id: string
        }
        Update: {
          contract_id?: string
          data?: Json
          fs_updated_time?: string
          user_id?: string
        }
      }
      user_events: {
        Row: {
          data: Json
          event_id: string
          fs_updated_time: string
          user_id: string
        }
        Insert: {
          data: Json
          event_id: string
          fs_updated_time: string
          user_id: string
        }
        Update: {
          data?: Json
          event_id?: string
          fs_updated_time?: string
          user_id?: string
        }
      }
      user_follows: {
        Row: {
          data: Json
          follow_id: string
          fs_updated_time: string
          user_id: string
        }
        Insert: {
          data: Json
          follow_id: string
          fs_updated_time: string
          user_id: string
        }
        Update: {
          data?: Json
          follow_id?: string
          fs_updated_time?: string
          user_id?: string
        }
      }
      user_portfolio_history: {
        Row: {
          data: Json
          fs_updated_time: string
          portfolio_id: string
          user_id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          portfolio_id: string
          user_id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          portfolio_id?: string
          user_id?: string
        }
      }
      user_reactions: {
        Row: {
          data: Json
          fs_updated_time: string
          reaction_id: string
          user_id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          reaction_id: string
          user_id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          reaction_id?: string
          user_id?: string
        }
      }
      user_recommendation_features: {
        Row: {
          f0: number
          f1: number
          f2: number
          f3: number
          f4: number
          user_id: string
        }
        Insert: {
          f0: number
          f1: number
          f2: number
          f3: number
          f4: number
          user_id: string
        }
        Update: {
          f0?: number
          f1?: number
          f2?: number
          f3?: number
          f4?: number
          user_id?: string
        }
      }
      user_seen_markets: {
        Row: {
          contract_id: string
          data: Json
          fs_updated_time: string
          user_id: string
        }
        Insert: {
          contract_id: string
          data: Json
          fs_updated_time: string
          user_id: string
        }
        Update: {
          contract_id?: string
          data?: Json
          fs_updated_time?: string
          user_id?: string
        }
      }
      users: {
        Row: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Insert: {
          data: Json
          fs_updated_time: string
          id: string
        }
        Update: {
          data?: Json
          fs_updated_time?: string
          id?: string
        }
      }
    }
    Views: {
      group_role: {
        Row: {
          avatar_url: string | null
          createdtime: number | null
          creator_id: string | null
          group_data: Json | null
          group_id: string | null
          group_name: string | null
          group_slug: string | null
          member_id: string | null
          name: string | null
          role: string | null
          username: string | null
        }
      }
      user_groups: {
        Row: {
          avatarurl: string | null
          follower_count: number | null
          groups: string[] | null
          id: string | null
          name: string | null
          username: string | null
        }
      }
    }
    Functions: {
      calculate_distance: {
        Args: {
          row1: unknown
          row2: unknown
        }
        Returns: number
      }
      dot: {
        Args: {
          urf: unknown
          crf: unknown
        }
        Returns: number
      }
      get_contract_metrics_with_contracts:
        | {
            Args: {
              uid: string
              count: number
            }
            Returns: {
              contract_id: string
              metrics: Json
              contract: Json
            }[]
          }
        | {
            Args: {
              uid: string
              count: number
              start: number
            }
            Returns: {
              contract_id: string
              metrics: Json
              contract: Json
            }[]
          }
      get_document_table: {
        Args: {
          doc_kind: string
        }
        Returns: string
      }
      get_document_table_spec: {
        Args: {
          table_id: string
        }
        Returns: Database["public"]["CompositeTypes"]["table_spec"]
      }
      get_open_limit_bets_with_contracts: {
        Args: {
          uid: string
          count: number
        }
        Returns: {
          contract_id: string
          bets: Json[]
          contract: Json
        }[]
      }
      get_recommended_contract_ids:
        | {
            Args: {
              uid: string
            }
            Returns: {
              contract_id: string
            }[]
          }
        | {
            Args: {
              uid: string
              count: number
            }
            Returns: {
              contract_id: string
            }[]
          }
      get_recommended_contract_scores: {
        Args: {
          uid: string
        }
        Returns: {
          contract_id: string
          score: number
        }[]
      }
      get_recommended_contract_scores_unseen: {
        Args: {
          uid: string
        }
        Returns: {
          contract_id: string
          rec_score: number
        }[]
      }
      get_recommended_contract_set: {
        Args: {
          uid: string
          n: number
        }
        Returns: Json[]
      }
      get_recommended_contracts_by_score:
        | {
            Args: {
              uid: string
              count: number
            }
            Returns: {
              data: Json
              score: number
            }[]
          }
        | {
            Args: {
              uid: string
            }
            Returns: {
              data: Json
              score: number
            }[]
          }
      get_recommended_daily_changed_contracts: {
        Args: {
          uid: string
          c_limit: number
          c_offset: number
        }
        Returns: {
          data: Json
          score: number
        }[]
      }
      get_related_contract_ids: {
        Args: {
          source_id: string
        }
        Returns: {
          contract_id: string
          distance: number
        }[]
      }
      get_related_contracts: {
        Args: {
          cid: string
          lim: number
          start: number
        }
        Returns: Json[]
      }
      get_time: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      gtrgm_compress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_in: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      gtrgm_options: {
        Args: {
          "": unknown
        }
        Returns: undefined
      }
      gtrgm_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      is_valid_contract: {
        Args: {
          data: Json
        }
        Returns: boolean
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      recently_liked_contract_counts: {
        Args: {
          since: number
        }
        Returns: {
          contract_id: string
          n: number
        }[]
      }
      replicate_writes_process_one: {
        Args: {
          r: unknown
        }
        Returns: boolean
      }
      replicate_writes_process_since: {
        Args: {
          since: string
        }
        Returns: {
          id: number
          succeeded: boolean
        }[]
      }
      search_contracts_by_group_slugs: {
        Args: {
          group_slugs: string[]
          lim: number
          start: number
        }
        Returns: Json[]
      }
      search_contracts_by_group_slugs_for_creator: {
        Args: {
          creator_id: string
          group_slugs: string[]
          lim: number
          start: number
        }
        Returns: Json[]
      }
      set_limit: {
        Args: {
          "": number
        }
        Returns: number
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: {
          "": string
        }
        Returns: string[]
      }
      to_jsonb: {
        Args: {
          "": Json
        }
        Returns: Json
      }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      vector_dims: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      vector_norm: {
        Args: {
          "": unknown
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      table_spec: {
        parent_id_col_name: string
        id_col_name: string
      }
    }
  }
}
